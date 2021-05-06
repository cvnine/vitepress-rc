"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const parse_1 = __importDefault(require("./parse"));
const mdast_util_from_markdown_1 = __importDefault(require("mdast-util-from-markdown"));
const micromark_extension_mdxjs_1 = __importDefault(require("micromark-extension-mdxjs"));
const mdast_util_mdx_1 = __importDefault(require("mdast-util-mdx"));
const slash_1 = __importDefault(require("slash"));
const cache_1 = require("./cache");
function getParseFilePath({ id, alias }, src) {
    let componentPath = src;
    if (!componentPath) {
        componentPath = path_1.default.resolve(path_1.default.parse(id).dir, './index');
        let filePath = isExist(id, `${componentPath}.tsx`) ||
            isExist(id, `${componentPath}.jsx`) ||
            isExist(id, `${componentPath}.ts`) ||
            isExist(id, `${componentPath}.js`);
        return filePath ? slash_1.default(filePath) : null;
    }
    else {
        let filePath = isExist(id, componentPath);
        if (filePath) {
            return slash_1.default(filePath);
        }
        else {
            for (const item of alias) {
                if (typeof item.find === 'string') {
                    filePath = isExist(item.replacement, componentPath.replace(item.find, item.replacement));
                    if (filePath) {
                        return slash_1.default(filePath);
                    }
                }
            }
            return null;
        }
    }
}
function isExist(id, componentPath) {
    let filePath = path_1.default.resolve(path_1.default.parse(id).dir, componentPath);
    if (fs_extra_1.default.existsSync(filePath)) {
        return filePath;
    }
    else {
        return null;
    }
}
function plugin({ id, alias }) {
    return (tree, vfile) => {
        let filePaths = [];
        unist_util_visit_1.default(tree, 'mdxJsxFlowElement', function visitor(node, i, parent) {
            if (node.name === 'API') {
                if (node.attributes) {
                    let attributes = node.attributes;
                    const itemSrc = attributes.find((x) => x.name === 'src');
                    const filePath = getParseFilePath({ id, alias }, itemSrc === null || itemSrc === void 0 ? void 0 : itemSrc.value);
                    if (filePath) {
                        let docgen = null;
                        try {
                            //测试时编译耗时近 3s，内置缓存
                            docgen = parse_1.default(filePath);
                        }
                        catch (err) {
                            console.log('error : ', err);
                        }
                        if (docgen) {
                            ;
                            node.attributes.push({
                                type: 'mdxJsxAttribute',
                                name: 'identifier',
                                /**
                                 *  bugs here
                                 *  see: https://github.com/mdx-js/mdx/issues/1513
                                 */
                                value: JSON.stringify(docgen).replace(/\\"/g, '%@%').replace(/"/g, '%&%'),
                            });
                            //for hmr
                            const importNode = mdast_util_from_markdown_1.default(`import "${slash_1.default(filePath)}"`, {
                                extensions: [micromark_extension_mdxjs_1.default()],
                                mdastExtensions: [mdast_util_mdx_1.default.fromMarkdown],
                            });
                            parent === null || parent === void 0 ? void 0 : parent.children.splice(i + 1, 0, importNode.children[0]);
                            filePaths.push(filePath);
                        }
                    }
                }
            }
        });
        cache_1.cacher.setHmrCache(id, [...new Set(filePaths)]);
    };
}
exports.default = plugin;
//# sourceMappingURL=index.js.map
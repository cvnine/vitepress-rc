"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
function plugin({ id }) {
    return (tree, vfile) => {
        unist_util_visit_1.default(tree, 'root', function visitor(node) {
            node.children = node.children.reduce((result, item) => {
                if (!result.length || result[result.length - 1]._previewer) {
                    result.push({
                        type: 'element',
                        tagName: 'div',
                        properties: { className: 'markdown' },
                        children: [],
                    });
                }
                if (item.type === 'element' &&
                    item.tagName === 'pre' &&
                    item.children &&
                    item.children.length === 1 &&
                    item.children[0].type === 'element' &&
                    item.children[0].tagName === 'code' &&
                    item.children[0].properties &&
                    item.children[0].properties.live) {
                    result.push({
                        _previewer: true,
                        type: 'element',
                        tagName: 'div',
                        properties: { className: 'code-live' },
                        children: [item],
                    });
                }
                else {
                    result[result.length - 1].children.push(item);
                }
                return result;
            }, []);
        });
    };
}
exports.default = plugin;
//# sourceMappingURL=wrapper.js.map
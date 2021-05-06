"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
const unist_util_find_1 = __importDefault(require("unist-util-find"));
function plugin({ id }) {
    return (tree, vfile) => {
        unist_util_visit_1.default(tree, 'heading', function visitor(node) {
            var _a;
            const textNode = unist_util_find_1.default(node, { type: 'text' });
            const headerId = (node.data && node.data.id) || '';
            (vfile.data.headers || (vfile.data.headers = [])).push({
                level: node.depth,
                title: (_a = textNode === null || textNode === void 0 ? void 0 : textNode.value) !== null && _a !== void 0 ? _a : '',
                slug: headerId,
            });
            if (headerId) {
                node.children.unshift({
                    type: 'link',
                    url: `#${headerId}`,
                    data: {
                        hProperties: {
                            ariaHidden: 'true',
                            class: 'header-anchor-a',
                        },
                    },
                    children: [],
                });
            }
        });
    };
}
exports.default = plugin;
//# sourceMappingURL=headers.js.map
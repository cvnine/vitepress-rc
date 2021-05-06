"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
const indexRE = /(^|.*\/)index.md(#?.*)$/i;
function normalizeHref(href) {
    let url = href;
    const indexMatch = url.match(indexRE);
    if (indexMatch) {
        const [, path, hash] = indexMatch;
        url = path + hash;
    }
    else {
        let cleanUrl = url.replace(/#.*$/, '').replace(/\?.*$/, '');
        // .md -> .html
        if (cleanUrl.endsWith('.md')) {
            cleanUrl = cleanUrl.replace(/\.md$/, '.html');
        }
        // ./foo -> ./foo.html
        if (!cleanUrl.endsWith('.html') && !cleanUrl.endsWith('/')) {
            cleanUrl += '.html';
        }
        const parsed = new URL(url, 'http://a.com');
        url = cleanUrl + parsed.search + parsed.hash;
    }
    // ensure leading . for relative paths
    if (!url.startsWith('/') && !/^\.\//.test(url)) {
        url = './' + url;
    }
    return url;
}
function plugin({ id }) {
    return (tree, vfile) => {
        unist_util_visit_1.default(tree, ['link', 'linkReference'], function visitor(node) {
            const url = node.url;
            let data = node.data || (node.data = {});
            let props = (data.hProperties || (data.hProperties = {}));
            if (url) {
                if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
                    props.target = '_blank';
                    props.rel = 'noopener noreferrer';
                }
                else if (!url.startsWith('#') && !url.startsWith('mailto:')) {
                    node.url = normalizeHref(node.url);
                }
            }
        });
    };
}
exports.default = plugin;
//# sourceMappingURL=link.js.map
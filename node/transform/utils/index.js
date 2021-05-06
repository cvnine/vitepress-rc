"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deeplyParseHeader = exports.parseHeader = exports.removeNonCodeWrappedHTML = void 0;
const parseEmojis = (str) => {
    const emojiData = require('node-emoji/lib/emoji.json');
    return String(str).replace(/:(.+?):/g, (placeholder, key) => emojiData[key] || placeholder);
};
const unescapeHtml = (html) => String(html)
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x3A;/g, ':')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const removeMarkdownTokens = (str) => String(str)
    .replace(/(\[(.[^\]]+)\]\((.[^)]+)\))/g, '$2') // []()
    .replace(/(`|\*{1,3}|_)(.*?[^\\])\1/g, '$2') // `{t}` | *{t}* | **{t}** | ***{t}*** | _{t}_
    .replace(/(\\)(\*|_|`|\!|<|\$)/g, '$2'); // remove escape char '\'
const trim = (str) => str.trim();
// This method remove the raw HTML but reserve the HTML wrapped by `<code>`.
// e.g.
// Input: "<a> b",   Output: "b"
// Input: "`<a>` b", Output: "`<a>` b"
const removeNonCodeWrappedHTML = (str) => {
    return String(str).replace(/(^|[^><`\\])<.*>([^><`]|$)/g, '$1$2');
};
exports.removeNonCodeWrappedHTML = removeNonCodeWrappedHTML;
const compose = (...processors) => {
    if (processors.length === 0)
        return (input) => input;
    if (processors.length === 1)
        return processors[0];
    return processors.reduce((prev, next) => {
        return (str) => next(prev(str));
    });
};
// Unescape html, parse emojis and remove some md tokens.
exports.parseHeader = compose(unescapeHtml, parseEmojis, removeMarkdownTokens, trim);
// Also clean the html that isn't wrapped by code.
// Because we want to support using VUE components in headers.
// e.g. https://vuepress.vuejs.org/guide/using-vue.html#badge
exports.deeplyParseHeader = compose(exports.removeNonCodeWrappedHTML, exports.parseHeader);
//# sourceMappingURL=index.js.map
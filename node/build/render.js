"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPage = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const slash_1 = __importDefault(require("slash"));
const escape = require('escape-html');
async function renderPage(config, page, // foo.md
result, appChunk, cssChunk, hashMapString) {
    const { render } = require(path_1.default.join(config.tempDir, `__server__.js`));
    const routePath = `/${page.replace(/\.md$/, '')}`;
    // const siteData = resolveSiteDataByRoute(config.site, routePath)
    const siteData = config.siteData;
    // lazy require server-renderer for production build
    const content = await render(routePath);
    const pageName = page.replace(/\//g, '_');
    // server build doesn't need hash
    const pageServerJsFileName = pageName + '.js';
    // resolve page data so we can render head tags
    const { __pageData } = require(path_1.default.join(config.tempDir, pageServerJsFileName));
    const pageData = JSON.parse(__pageData);
    const frontmatterHead = pageData.frontmatter.head;
    const preloadLinks = [
        // resolve imports for index.js + page.md.js and inject script tags for
        // them as well so we fetch everything as early as possible without having
        // to wait for entry chunks to parse
        ...resolvePageImports(config, page, result, appChunk),
        appChunk.fileName,
    ]
        .map((file) => {
        return `<link rel="modulepreload" href="${siteData.base}${file}">`;
    })
        .join('\n    ');
    const stylesheetLink = cssChunk ? `<link rel="stylesheet" href="${siteData.base}${cssChunk.fileName}">` : '';
    const html = `
<!DOCTYPE html>
<html lang="${siteData.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>
      ${pageData.title ? pageData.title + ` | ` : ``}${siteData.title}
    </title>
    <meta name="description" content="${pageData.description || siteData.description}">
    ${stylesheetLink}
    ${preloadLinks}
    ${renderHead(siteData.head)}
    ${renderHead(frontmatterHead && filterOutHeadDescription(frontmatterHead))}
  </head>
  <body>
    <div id="app">${content}</div>
    <script>__VP_HASH_MAP__ = JSON.parse(${hashMapString})</script>
    <script type="module" async src="${siteData.base}${appChunk.fileName}"></script>
  </body>
</html>`.trim();
    const htmlFileName = path_1.default.join(config.outDir, page.replace(/\.md$/, '.html'));
    await fs_extra_1.default.ensureDir(path_1.default.dirname(htmlFileName));
    await fs_extra_1.default.writeFile(htmlFileName, html);
}
exports.renderPage = renderPage;
function resolvePageImports(config, page, result, indexChunk) {
    // find the page's js chunk and inject script tags for its imports so that
    // they are start fetching as early as possible
    const srcPath = slash_1.default(fs_extra_1.default.realpathSync(path_1.default.resolve(config.root, page)));
    const pageChunk = result.output.find((chunk) => chunk.type === 'chunk' && chunk.facadeModuleId === srcPath);
    return Array.from(new Set([
        ...indexChunk.imports,
        ...indexChunk.dynamicImports,
        ...pageChunk.imports,
        ...pageChunk.dynamicImports,
    ]));
}
function renderHead(head) {
    if (!head || !head.length) {
        return '';
    }
    return head
        .map(([tag, attrs = {}, innerHTML = '']) => {
        const openTag = `<${tag}${renderAttrs(attrs)}>`;
        if (tag !== 'link' && tag !== 'meta') {
            return `${openTag}${innerHTML}</${tag}>`;
        }
        else {
            return openTag;
        }
    })
        .join('\n    ');
}
function renderAttrs(attrs) {
    return Object.keys(attrs)
        .map((key) => {
        return ` ${key}="${escape(attrs[key])}"`;
    })
        .join('');
}
function isMetaDescription(headConfig) {
    return headConfig[0] === 'meta' && headConfig[1] && headConfig[1].name === 'description';
}
function filterOutHeadDescription(head) {
    return head.filter((h) => !isMetaDescription(h));
}
//# sourceMappingURL=render.js.map
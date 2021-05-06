"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdxTransform = void 0;
//fork from vite-plugin-mdx
const esbuild = __importStar(require("esbuild"));
const mdx_1 = require("@mdx-js/mdx");
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const remark_frontmatter_1 = __importDefault(require("remark-frontmatter"));
const remark_parse_yaml_1 = __importDefault(require("remark-parse-yaml"));
const remark_slug_1 = __importDefault(require("remark-slug"));
const remark_emoji_1 = __importDefault(require("remark-emoji"));
const slash_1 = __importDefault(require("slash"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const frontmatter_1 = __importDefault(require("./plugins/frontmatter"));
const headers_1 = __importDefault(require("./plugins/headers"));
const link_1 = __importDefault(require("./plugins/link"));
const api_1 = __importDefault(require("./plugins/api"));
const code_1 = __importDefault(require("./plugins/code"));
const container_1 = __importDefault(require("./plugins/container"));
const wrapper_1 = __importDefault(require("./plugins/wrapper"));
const utils_1 = require("./utils");
async function jsxToES2019(code_jsx) {
    // We use `esbuild` ourselves instead of letting Vite doing the esbuild transform,
    // because there don't seem to be a way to change the esbuild options for specific
    // files only: https://vitejs.dev/config/#esbuild
    let { code: code_es2019 } = await esbuild.transform(code_jsx, {
        loader: 'jsx',
        jsxFactory: 'mdx',
        target: 'es2019',
    });
    return code_es2019;
}
function injectImports(code_es2019, pageData) {
    return [
        `import React from 'react'`,
        `import { mdx } from '@mdx-js/react'`,
        '',
        code_es2019,
        '',
        `export const __pageData = ${JSON.stringify(JSON.stringify(pageData))}`,
    ].join('\n');
}
function inferTitle(frontmatter, headers) {
    if (frontmatter.home) {
        return 'Home';
    }
    if (frontmatter.title) {
        return utils_1.deeplyParseHeader(frontmatter.title);
    }
    const match = headers[0];
    if (match) {
        return match.title;
    }
    return '';
}
function inferDescription(frontmatter) {
    const { description, head } = frontmatter;
    if (description !== undefined) {
        return description;
    }
    return (head && getHeadMetaContent(head, 'description')) || '';
}
function getHeadMetaContent(head, name) {
    if (!head || !head.length) {
        return undefined;
    }
    const meta = head.find(([tag, attrs = {}]) => {
        return tag === 'meta' && attrs.name === name && attrs.content;
    });
    return meta && meta[1].content;
}
async function mdxTransform(code_mdx, id, { root, alias }, userPlugin) {
    var _a, _b, _c, _d, _e, _f;
    const userRemarkPlugins = ((_b = (_a = userPlugin === null || userPlugin === void 0 ? void 0 : userPlugin.remarkPlugins) === null || _a === void 0 ? void 0 : _a.map((x) => {
        if (Array.isArray(x)) {
            return [x[0], { ...x[1], id }];
        }
        if (typeof x === 'function') {
            return [x, { id }];
        }
        return false;
    }).filter(Boolean)) !== null && _b !== void 0 ? _b : []);
    const userRehypePlugins = ((_d = (_c = userPlugin === null || userPlugin === void 0 ? void 0 : userPlugin.rehypePlugins) === null || _c === void 0 ? void 0 : _c.map((x) => {
        if (Array.isArray(x)) {
            return [x[0], { ...x[1], id }];
        }
        if (typeof x === 'function') {
            return [x, { id }];
        }
        return false;
    }).filter(Boolean)) !== null && _d !== void 0 ? _d : []);
    const code_vFile = await mdx_1.createCompiler({
        remarkPlugins: [
            remark_frontmatter_1.default,
            remark_parse_yaml_1.default,
            remark_slug_1.default,
            remark_gfm_1.default,
            remark_emoji_1.default,
            [frontmatter_1.default, { id }],
            [headers_1.default, { id }],
            [link_1.default, { id }],
            [api_1.default, { id, alias }],
            [code_1.default, { id }],
            [container_1.default, { id }],
            ...userRemarkPlugins,
        ],
        rehypePlugins: [[wrapper_1.default, { id }], ...userRehypePlugins],
    }).process(code_mdx);
    const _data = code_vFile.data;
    let _frontmatter = (_e = _data.frontmatter) !== null && _e !== void 0 ? _e : {};
    let _headers = (_f = _data.headers) !== null && _f !== void 0 ? _f : [];
    let pageData = {
        title: inferTitle(_frontmatter, _headers),
        description: inferDescription(_frontmatter),
        relativePath: slash_1.default(path_1.default.relative(root, id)),
        headers: _headers,
        frontmatter: _frontmatter,
        lastUpdated: Math.round(fs_extra_1.default.statSync(id).mtimeMs),
    };
    const code_es2019 = await jsxToES2019(String(code_vFile));
    const code_final = injectImports(code_es2019, pageData);
    return { code: code_final, pageData };
}
exports.mdxTransform = mdxTransform;
//# sourceMappingURL=index.js.map
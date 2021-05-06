"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVitePlugin = void 0;
const path_1 = __importDefault(require("path"));
const plugin_react_refresh_1 = __importDefault(require("@vitejs/plugin-react-refresh"));
const transform_1 = require("./transform");
const paths_1 = require("./paths");
const config_1 = require("./config");
const slash_1 = __importDefault(require("slash"));
const cache_1 = require("./transform/plugins/api/cache");
const hashRE = /\.(\w+)\.js$/;
const isPageChunk = (chunk) => !!(chunk.type === 'chunk' && chunk.isEntry && chunk.facadeModuleId && chunk.facadeModuleId.endsWith('.md'));
function createVitePlugin(root, { configPath, alias, md, siteData, pages, themeDir }, ssr = false, pageToHashMap) {
    const reactRefreshPlugin = plugin_react_refresh_1.default();
    let _server;
    const vitePluginPressRc = {
        name: 'vite-plugin-press-rc',
        config() {
            return {
                resolve: {
                    alias,
                },
            };
        },
        resolveId(id) {
            if (id === paths_1.SPECIAL_IMPORT_SITE_DATA) {
                return paths_1.SPECIAL_IMPORT_SITE_DATA;
            }
            if (id === paths_1.SPECIAL_IMPORT_CODE_SCOPE) {
                return paths_1.SPECIAL_IMPORT_CODE_SCOPE;
            }
        },
        async load(id) {
            if (id === paths_1.SPECIAL_IMPORT_SITE_DATA) {
                return `export default ${JSON.stringify(JSON.stringify(siteData))}`;
            }
            if (id === paths_1.SPECIAL_IMPORT_CODE_SCOPE) {
                if (md && md.codeScope) {
                    let str = ``, exportJsScope = ``, exportCssScope = ``;
                    Object.entries(md.codeScope).forEach(([key, val], index) => {
                        str += `import * as codeScope_${index} from '${`/${slash_1.default(path_1.default.relative(root, val))}`}';\n`;
                        if (val.endsWith('.css')) {
                            exportCssScope = exportCssScope
                                ? exportCssScope + `, ${JSON.stringify(key)}: codeScope_${index}`
                                : `${JSON.stringify(key)}: codeScope_${index}`;
                        }
                        else {
                            exportJsScope = exportJsScope
                                ? exportJsScope + `, ${JSON.stringify(key)}: codeScope_${index}`
                                : `${JSON.stringify(key)}: codeScope_${index}`;
                        }
                    });
                    return str + `export default {"js": {${exportJsScope}}, "css":{${exportCssScope}}}`;
                }
                return `export default {"js":{},"css":{}}`;
            }
        },
        async transform(code, id, ssr) {
            if (/\.css?$/.test(id)) {
                if (_server) {
                    //todo 组件代码内引用css的，注入shadow dom
                }
            }
            if (/\.md?$/.test(id)) {
                let { code: _code } = await transform_1.mdxTransform(code, id, { root, alias }, md ? md.plugin : undefined);
                const refreshResult = await reactRefreshPlugin.transform.call(this, _code, id + '.js', ssr);
                //reactRefreshPlugin会检测导出的都必须是react组件，增加了pageData的导出会导致热更新失败，这里hack掉
                if (refreshResult && typeof refreshResult !== 'string') {
                    refreshResult.code = refreshResult.code.replace('window.$RefreshSig$ = prevRefreshSig;', ['window.$RefreshSig$ = prevRefreshSig;', 'import.meta.hot.accept();'].join('\n'));
                }
                return refreshResult || _code;
            }
        },
        configureServer(server) {
            // serve our index.html after vite history fallback
            return () => {
                _server = server;
                server.middlewares.use((req, res, next) => {
                    if (req.url.endsWith('.html')) {
                        res.statusCode = 200;
                        res.end(`
								<!DOCTYPE html>
								<html>
									<head>
									<meta charset="utf-8">
									<script type="module" src="/@vite/client"></script>
									<script type="module">
										import RefreshRuntime from "/@react-refresh"
										RefreshRuntime.injectIntoGlobalHook(window)
										window.$RefreshReg$ = () => {}
										window.$RefreshSig$ = () => (type) => type
										window.__vite_plugin_react_preamble_installed__ = true
									</script>
									<script>
										window.global = window
									</script>
									</head>
									<body>
										<div id="app"></div>
										<script type="module" src="/@fs/${paths_1.APP_PATH}/index.js"></script>
									</body>
								</html>`);
                        return;
                    }
                    next();
                });
            };
        },
        async handleHotUpdate(ctx) {
            // handle config hmr
            const { file, server, read, modules } = ctx;
            if (file.endsWith('.css')) {
                //todo 组件代码内引用css的，注入shadow dom的热更新
            }
            if (file === slash_1.default(configPath)) {
                const newData = await config_1.resolveSiteData(root);
                if (newData.base !== siteData.base) {
                    console.warn(`[vitepress-rc]: config.base has changed. Please restart the dev server.`);
                }
                siteData = newData;
                return [server.moduleGraph.getModuleById(paths_1.SPECIAL_IMPORT_SITE_DATA)];
            }
            // hot reload .md files
            if (file.endsWith('.md')) {
                const content = await read();
                const { pageData } = await transform_1.mdxTransform(content, file, { root, alias });
                // notify the client to update page data
                server.ws.send({
                    type: 'custom',
                    event: 'vitepress:pageData',
                    data: {
                        path: `/${slash_1.default(path_1.default.relative(root, file))}`,
                        pageData,
                    },
                });
                return [...modules];
            }
            if (/\.(jsx|tsx|js|ts)$/.test(file)) {
                let idPaths = cache_1.cacher.getHmrCache(file);
                for (const item of idPaths) {
                    server.ws.send({
                        type: 'update',
                        updates: [
                            {
                                type: `js-update`,
                                timestamp: Date.now(),
                                path: `/${slash_1.default(path_1.default.relative(root, item))}`,
                                acceptedPath: `/${slash_1.default(path_1.default.relative(root, item))}`,
                            },
                        ],
                    });
                }
            }
        },
        generateBundle(_options, bundle) {
            if (ssr) {
                // ssr build:
                // delete all asset chunks
                for (const name in bundle) {
                    if (bundle[name].type === 'asset') {
                        delete bundle[name];
                    }
                }
            }
            else {
                // client build:
                // for each .md entry chunk, adjust its name to its correct path.
                for (const name in bundle) {
                    const chunk = bundle[name];
                    if (isPageChunk(chunk)) {
                        // record page -> hash relations
                        const hash = chunk.fileName.match(hashRE)[1];
                        pageToHashMap[chunk.name.toLowerCase()] = hash;
                    }
                }
            }
        },
    };
    return [reactRefreshPlugin, vitePluginPressRc];
}
exports.createVitePlugin = createVitePlugin;
//# sourceMappingURL=plugin.js.map
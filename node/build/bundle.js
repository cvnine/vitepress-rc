"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundle = exports.failMark = exports.okMark = void 0;
const ora_1 = __importDefault(require("ora"));
const path_1 = __importDefault(require("path"));
const slash_1 = __importDefault(require("slash"));
const vite_1 = require("vite");
const paths_1 = require("../paths");
const plugin_1 = require("../plugin");
exports.okMark = '\x1b[32m✓\x1b[0m';
exports.failMark = '\x1b[31m✖\x1b[0m';
// bundles the VitePress app for both client AND server.
async function bundle(config, options) {
    const root = config.root;
    const pageToHashMap = Object.create(null);
    // define custom rollup input
    // this is a multi-entry build - every page is considered an entry chunk
    // the loading is done via filename conversion rules so that the
    // metadata doesn't need to be included in the main chunk.
    const input = {
        __server__: path_1.default.resolve(paths_1.APP_PATH, 'entry-server.js'),
        __entry__: path_1.default.resolve(paths_1.APP_PATH, 'index.js'),
    };
    config.pages.forEach((file) => {
        // page filename conversion
        // foo/bar.md -> foo_bar.md
        input[slash_1.default(file).replace(/\//g, '_')] = path_1.default.resolve(root, file);
    });
    // resolve options to pass to vite
    const { rollupOptions } = options;
    const resolveViteConfig = (ssr) => ({
        root,
        base: config.siteData.base,
        logLevel: 'warn',
        plugins: plugin_1.createVitePlugin(root, config, ssr, pageToHashMap),
        // @ts-ignore
        ssr: {
            noExternal: ['vitepress-rc', 'copy-text-to-clipboard'],
        },
        build: {
            ...options,
            emptyOutDir: true,
            ssr,
            outDir: ssr ? config.tempDir : config.outDir,
            cssCodeSplit: false,
            rollupOptions: {
                ...rollupOptions,
                input,
                // important so that each page chunk and the index export things for each
                // other
                preserveEntrySignatures: 'allow-extension',
                output: {
                    ...rollupOptions === null || rollupOptions === void 0 ? void 0 : rollupOptions.output,
                    ...(ssr
                        ? {}
                        : {
                            chunkFileNames(chunk) {
                                //todo
                                if (!chunk.isEntry && /runtime/.test(chunk.name)) {
                                    return `assets/framework.[hash].js`;
                                }
                                return `assets/[name].[hash].js`;
                            },
                        }),
                },
            },
            minify: ssr ? false : !process.env.DEBUG,
        },
    });
    let clientResult;
    let serverResult;
    const spinner = ora_1.default();
    spinner.start('building client + server bundles...');
    try {
        ;
        [clientResult, serverResult] = await Promise.all([
            vite_1.build(resolveViteConfig(false)),
            vite_1.build(resolveViteConfig(true)),
        ]);
    }
    catch (e) {
        spinner.stopAndPersist({
            symbol: exports.failMark,
        });
        throw e;
    }
    spinner.stopAndPersist({
        symbol: exports.okMark,
    });
    return [clientResult, serverResult, pageToHashMap];
}
exports.bundle = bundle;
//# sourceMappingURL=bundle.js.map
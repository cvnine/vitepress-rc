"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const config_1 = require("../config");
const bundle_1 = require("./bundle");
const ora_1 = __importDefault(require("ora"));
const render_1 = require("./render");
const slash_1 = __importDefault(require("slash"));
const path_1 = __importDefault(require("path"));
const paths_1 = require("../paths");
async function build(root, buildOptions = {}) {
    const start = Date.now();
    process.env.NODE_ENV = 'production';
    const siteConfig = await config_1.resolveConfig(root);
    try {
        const [clientResult, , pageToHashMap] = await bundle_1.bundle(siteConfig, buildOptions);
        const spinner = ora_1.default();
        spinner.start('rendering pages...');
        try {
            const appChunk = clientResult.output.find((chunk) => chunk.type === 'chunk' &&
                chunk.isEntry &&
                chunk.facadeModuleId === slash_1.default(path_1.default.resolve(paths_1.APP_PATH, 'index.js')));
            const cssChunk = clientResult.output.find((chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css'));
            // We embed the hash map string into each page directly so that it doesn't
            // alter the main chunk's hash on every build. It's also embedded as a
            // string and JSON.parsed from the client because it's faster than embedding
            // as JS object literal.
            const hashMapString = JSON.stringify(JSON.stringify(pageToHashMap));
            for (const page of siteConfig.pages) {
                await render_1.renderPage(siteConfig, page, clientResult, appChunk, cssChunk, hashMapString);
            }
        }
        catch (e) {
            spinner.stopAndPersist({
                symbol: bundle_1.failMark,
            });
            throw e;
        }
        spinner.stopAndPersist({
            symbol: bundle_1.okMark,
        });
    }
    finally {
        await fs_extra_1.default.remove(siteConfig.tempDir);
    }
    console.log(`build complete in ${((Date.now() - start) / 1000).toFixed(2)}s.`);
}
exports.build = build;
//# sourceMappingURL=index.js.map
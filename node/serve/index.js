"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const sirv_1 = __importDefault(require("sirv"));
const compression_1 = __importDefault(require("compression"));
const config_1 = require("../config");
async function serve(options = {}) {
    const port = options.port !== undefined ? options.port : 5000;
    const site = await config_1.resolveConfig(options.root);
    const compress = compression_1.default();
    const serve = sirv_1.default(site.outDir, {
        etag: true,
        single: true,
        maxAge: 31536000,
        immutable: true,
        setHeaders(res, pathname) {
            if (!pathname.includes('/assets/')) {
                // force server validation for non-asset files since they are not
                // fingerprinted.
                res.setHeader('cache-control', 'no-cache');
            }
        },
    });
    require('polka')()
        .use(compress, serve)
        .listen(port, (err) => {
        if (err)
            throw err;
        console.log(`Built site served at http://localhost:${port}/\n`);
    });
}
exports.serve = serve;
//# sourceMappingURL=index.js.map
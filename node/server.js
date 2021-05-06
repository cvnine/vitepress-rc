"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const vite_1 = require("vite");
const config_1 = require("./config");
const plugin_1 = require("./plugin");
async function createServer(root = process.cwd(), serverOptions = {}) {
    const config = await config_1.resolveConfig(root);
    return vite_1.createServer({
        root,
        base: config.siteData.base,
        plugins: plugin_1.createVitePlugin(root, config),
        server: serverOptions,
        optimizeDeps: {
            include: [
                'react/jsx-runtime',
                'react',
                'react-dom',
                'styled-components',
                '@mdx-js/react',
                'prism-react-renderer',
                'react-simple-code-editor',
                'copy-text-to-clipboard',
            ],
        },
    });
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map
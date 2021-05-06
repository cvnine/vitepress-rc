"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
const chalk_1 = __importDefault(require("chalk"));
const server_1 = require("./server");
const build_1 = require("./build");
const serve_1 = require("./serve");
const argv = minimist_1.default(process.argv.slice(2));
console.log(chalk_1.default.cyan(`vitepress-rc v${require('../../package.json').version}`));
console.log(chalk_1.default.cyan(`vite v${require('vite/package.json').version}`));
const command = argv._[0];
const root = argv._[command ? 1 : 0];
if (root) {
    argv.root = root;
}
if (!command || command === 'dev') {
    server_1.createServer(root, argv)
        .then((server) => {
        server.listen();
    })
        .catch((err) => {
        console.error(chalk_1.default.red(`failed to start server. error:\n`), err);
        process.exit(1);
    });
}
else if (command === 'build') {
    build_1.build(root, argv).catch((err) => {
        console.error(chalk_1.default.red(`build error:\n`), err);
        process.exit(1);
    });
}
else if (command === 'serve') {
    serve_1.serve(argv).catch((err) => {
        console.error(chalk_1.default.red(`failed to start server. error:\n`), err);
        process.exit(1);
    });
}
else {
    console.log(chalk_1.default.red(`unknown command "${command}".`));
    process.exit(1);
}
//# sourceMappingURL=cli.js.map
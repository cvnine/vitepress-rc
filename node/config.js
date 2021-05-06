"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSiteData = exports.resolveUserConfig = exports.resolveConfig = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const globby_1 = __importDefault(require("globby"));
const paths_1 = require("./paths");
const resolve = (root, file) => {
    return path_1.default.resolve(root, `.vitepressrc`, file);
};
async function resolveConfig(root = process.cwd()) {
    const userConfig = await resolveUserConfig(root);
    const siteData = await resolveSiteData(root);
    //主题路径
    const userThemeDir = resolve(root, 'theme');
    const themeDir = (await fs_extra_1.default.pathExists(userThemeDir)) ? userThemeDir : paths_1.DEFAULT_THEME_PATH;
    const config = {
        root,
        siteData,
        themeDir,
        pages: await globby_1.default(['**.md'], { cwd: root, ignore: ['node_modules'] }),
        configPath: resolve(root, 'config.js'),
        outDir: resolve(root, 'dist'),
        alias: paths_1.resolveAliases(themeDir, userConfig),
        tempDir: path_1.default.resolve(paths_1.APP_PATH, 'temp'),
        md: userConfig.md,
    };
    return config;
}
exports.resolveConfig = resolveConfig;
async function resolveUserConfig(root) {
    const configPath = resolve(root, 'config.js');
    const hasUserConfig = await fs_extra_1.default.pathExists(configPath);
    delete require.cache[configPath];
    const userConfig = hasUserConfig ? require(configPath) : {};
    if (hasUserConfig) {
        console.log(`loaded config at ${chalk_1.default.yellow(configPath)}`);
    }
    else {
        console.log(`no config file found.`);
    }
    return userConfig;
}
exports.resolveUserConfig = resolveUserConfig;
async function resolveSiteData(root) {
    const userConfig = await resolveUserConfig(root);
    return {
        lang: userConfig.lang || 'en-US',
        title: userConfig.title || 'VitePress-rc',
        description: userConfig.description || 'A VitePress-rc site',
        head: userConfig.head || [],
        base: userConfig.base ? userConfig.base.replace(/([^/])$/, '$1/') : '/',
        themeConfig: userConfig.themeConfig || {},
    };
}
exports.resolveSiteData = resolveSiteData;
//# sourceMappingURL=config.js.map
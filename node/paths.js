"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAliases = exports.SPECIAL_IMPORT_CODE_SCOPE = exports.SPECIAL_IMPORT_THEME = exports.SPECIAL_IMPORT_SITE_DATA = exports.DEFAULT_THEME_PATH = exports.APP_PATH = void 0;
const path_1 = __importDefault(require("path"));
exports.APP_PATH = path_1.default.join(__dirname, '../client/app');
exports.DEFAULT_THEME_PATH = path_1.default.join(__dirname, '../client/theme-default');
//客户端的模拟路径
exports.SPECIAL_IMPORT_SITE_DATA = '@virtual-module/siteData';
exports.SPECIAL_IMPORT_THEME = '@virtual-module/theme';
exports.SPECIAL_IMPORT_CODE_SCOPE = '@virtual-module/codeScope';
function resolveAliases(themeDir, userConfig) {
    const paths = {
        ...userConfig.alias,
        [exports.SPECIAL_IMPORT_THEME]: themeDir,
    };
    return [
        ...Object.keys(paths).map((p) => ({
            find: p,
            replacement: paths[p],
        })),
        {
            find: /^vitepress-rc$/,
            replacement: path_1.default.join(__dirname, '../client/index'),
        },
        {
            find: /^vitepress-rc\/theme$/,
            replacement: path_1.default.join(__dirname, '../client/theme-default/index'),
        },
        // alias for local linked development
        {
            find: /^vitepress-rc\//,
            replacement: path_1.default.join(__dirname, '../../') + '/',
        },
    ];
}
exports.resolveAliases = resolveAliases;
//# sourceMappingURL=paths.js.map
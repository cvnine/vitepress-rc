"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacher = void 0;
const fs_1 = __importDefault(require("fs"));
class FileCache {
    constructor() {
        this.cache = {};
        this.hmrCache = {};
    }
    add(filePath, value, key) {
        this.cache[key || filePath] = {
            filePath,
            value,
            updatedTime: fs_1.default.lstatSync(filePath).mtimeMs,
        };
    }
    get(key) {
        let result;
        if (this.cache[key] && fs_1.default.lstatSync(this.cache[key].filePath).mtimeMs === this.cache[key].updatedTime) {
            result = this.cache[key].value;
        }
        return result;
    }
    setHmrCache(id, filePaths) {
        this.hmrCache[id] = filePaths;
    }
    getHmrCache(filePath) {
        let result = [];
        for (const [key, value] of Object.entries(this.hmrCache)) {
            if (value.includes(filePath)) {
                result.push(key);
            }
        }
        return result;
    }
}
exports.cacher = new FileCache();
//# sourceMappingURL=cache.js.map
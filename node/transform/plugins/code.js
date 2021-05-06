"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
function plugin({ id }) {
    return (tree, vfile) => {
        unist_util_visit_1.default(tree, 'code', function visitor(node) { });
    };
}
exports.default = plugin;
//# sourceMappingURL=code.js.map
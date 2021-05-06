"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser = __importStar(require("react-docgen-typescript"));
const cache_1 = require("./cache");
const DEFAULT_EXPORTS = [
    'default',
    '__function',
    'Stateless',
    'StyledComponentClass',
    'StyledComponent',
    'FunctionComponent',
    'StatelessComponent',
    'ForwardRefExoticComponent',
];
function Parser(filePath) {
    let definitions = cache_1.cacher.get(filePath);
    if (!definitions) {
        definitions = {};
        parser
            .withCompilerOptions({ esModuleInterop: true, jsx: 'preserve' }, {
            savePropValueAsString: true,
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            componentNameResolver: (source) => {
                return DEFAULT_EXPORTS.includes(source.getName()) ? 'default' : undefined;
            },
        })
            .parse(filePath)
            .forEach((item) => {
            // convert result to IApiDefinition
            const exportName = item.displayName;
            const props = Object.entries(item.props).map(([identifier, prop]) => {
                const result = { identifier };
                const fields = ['description', 'type', 'defaultValue', 'required'];
                fields.forEach((field) => {
                    switch (field) {
                        case 'type':
                            result.type = prop.type.raw || prop.type.name;
                            break;
                        case 'description':
                            if (prop.description) {
                                result.description = prop.description;
                            }
                            break;
                        case 'defaultValue':
                            if (prop[field]) {
                                result.defaultValue = prop[field].value;
                            }
                            break;
                        case 'required':
                            if (prop[field]) {
                                result.required = prop[field];
                            }
                            break;
                    }
                });
                return result;
            });
            definitions[exportName] = props;
        });
    }
    cache_1.cacher.add(filePath, definitions);
    return definitions;
}
exports.default = Parser;
//# sourceMappingURL=parse.js.map
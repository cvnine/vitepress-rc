import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { WrapTable } from './style';
const TEXT = {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
};
export const API = ({ export: expt, identifier }) => {
    const renderMap = getRenderMap(expt, identifier) ?? null;
    return (renderMap && (_jsxs(WrapTable, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: TEXT.name }, void 0),
                        _jsx("th", { children: TEXT.description }, void 0),
                        _jsx("th", { children: TEXT.type }, void 0),
                        _jsx("th", { children: TEXT.default }, void 0)] }, void 0) }, void 0),
            _jsx("tbody", { children: renderMap.map((row) => (_jsxs("tr", { children: [_jsx("td", { children: row.identifier }, void 0),
                        _jsx("td", { children: row.description?.replace(/%@%/g, '"') || '--' }, void 0),
                        _jsx("td", { children: _jsx("code", { children: row.type?.replace(/%@%/g, '"') }, void 0) }, void 0),
                        _jsx("td", { children: _jsx("code", { children: row.default?.replace(/%@%/g, '"') || (row.required && TEXT.required) || '--' }, void 0) }, void 0)] }, row.identifier))) }, void 0)] }, void 0)));
};
function getRenderMap(expt = 'default', identifier) {
    if (!identifier)
        return null;
    let identifierMap = null, result = null;
    try {
        identifierMap = JSON.parse(identifier.replace(/%&%/g, '"') ?? '{}');
        result = identifierMap[expt];
        if (!result) {
            for (const key in identifierMap) {
                result = identifierMap[key];
                break;
            }
        }
    }
    catch (err) { }
    return result;
}

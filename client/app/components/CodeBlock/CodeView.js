import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Highlight, { defaultProps } from 'prism-react-renderer';
import { CodeViewWrap } from './style';
import { CopyIcon, CopyOk } from './icon';
import { useCopy } from './hooks';
export const CodeView = ({ code, language, lineNumbers }) => {
    const [copy, status] = useCopy();
    return (_jsxs(CodeViewWrap, { children: [_jsx("span", Object.assign({ className: "copy-icon" }, { children: status === 'ready' ? _jsx(CopyIcon, { onClick: () => copy(code) }, void 0) : _jsx(CopyOk, {}, void 0) }), void 0),
            _jsx(Highlight, Object.assign({}, defaultProps, { code: code, language: language, theme: undefined }, { children: ({ className, style, tokens, getLineProps, getTokenProps }) => (_jsx("pre", Object.assign({ className: className, style: { ...style } }, { children: tokens.map((line, i) => {
                        const inRange = lineNumbers.some(([start, end]) => {
                            if (start && end) {
                                return i + 1 >= start && i + 1 <= end;
                            }
                            return i + 1 === start;
                        });
                        const { className: cls, ...res } = getLineProps({ line, key: i });
                        return (_jsx("div", Object.assign({ className: `${inRange ? 'highlighted ' + cls : cls}` }, res, { children: line.map((token, key) => (_jsx("span", Object.assign({}, getTokenProps({ token, key })), key))) }), i));
                    }) }), void 0)) }), void 0)] }, void 0));
};

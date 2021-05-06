import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import LiveContext from './LiveContext';
import Editor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
function throttle(fn, delay = 100) {
    let timer = undefined;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const CodeEditor = ({ code: prevCode, onChange, style, onCodeChange, ...res }) => {
    const [code, setCode] = React.useState(prevCode);
    useEffect(() => {
        setCode(prevCode);
        onCodeChange && onCodeChange(prevCode);
    }, [prevCode]);
    const highlightCode = (code) => (_jsx(Highlight, Object.assign({}, defaultProps, { code: code, theme: undefined, language: 'tsx' }, { children: ({ className, style, tokens, getLineProps, getTokenProps }) => (_jsx("div", Object.assign({ className: className, style: { ...style } }, { children: tokens.map((line, i) => (_jsx("div", Object.assign({}, getLineProps({ line, key: i }), { children: line.map((token, key) => (_jsx("span", Object.assign({}, getTokenProps({ token, key })), key))) }), i))) }), void 0)) }), void 0));
    const updateContent = (code) => {
        setCode(code);
        onChange && onChange(code);
        onCodeChange && onCodeChange(code);
    };
    return (_jsx(Editor, Object.assign({ value: code, highlight: highlightCode, onValueChange: updateContent, style: {
            ...style,
        } }, res), void 0));
};
export default function LiveEditor(props) {
    return (_jsx(LiveContext.Consumer, { children: ({ code, disabled, onChange }) => (_jsx(CodeEditor, Object.assign({ code: code, disabled: disabled, onChange: onChange }, props), void 0)) }, void 0));
}

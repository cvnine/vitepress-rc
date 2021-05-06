import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'vitepress-rc';
import { CodeIcon, CopyIcon, CopyOk, RestoreIcon } from './icon';
import { CodeViewWrap, PreviewerWarp } from './style';
import { useCopy } from './hooks';
import codeScope from '@virtual-module/codeScope';
import styled from 'styled-components';
function getStyle({ transform, compact }) {
    let transformStyle = transform ? { transform: 'translate(0px, 0px)' } : {};
    let compactStyle = compact ? { padding: '0' } : {};
    return {
        ...transformStyle,
        ...compactStyle,
    };
}
export const CodePreviewer = ({ code, local, codeOptions }) => {
    const [showCode, setShowCode] = useState(false);
    const [currentCode, setCurrentCode] = useState(code);
    const [copy, status] = useCopy();
    useEffect(() => {
        setCurrentCode(code);
    }, [code]);
    return (_jsx(PreviewerWarp, { children: _jsxs(LiveProvider, Object.assign({ code: currentCode, local: local, scope: { js: { ...codeScope['js'], react: React, 'styled-components': styled }, css: codeScope['css'] } }, { children: [_jsx("div", Object.assign({ className: "code-preview-wrap", style: getStyle(codeOptions) }, { children: _jsx(LivePreview, {}, void 0) }), void 0),
                _jsxs("div", Object.assign({ className: "code-actions" }, { children: [_jsx("div", {}, void 0),
                        _jsxs("div", Object.assign({ className: "code-actions--right" }, { children: [_jsx(RestoreIcon, { onClick: () => setCurrentCode(code) }, void 0),
                                status === 'ready' ? _jsx(CopyIcon, { onClick: () => copy(currentCode) }, void 0) : _jsx(CopyOk, {}, void 0),
                                _jsx(CodeIcon, { onClick: () => setShowCode((val) => !val) }, void 0)] }), void 0)] }), void 0),
                showCode && (_jsx(_Fragment, { children: _jsx(CodeViewWrap, Object.assign({ className: "code-editor-wrap" }, { children: _jsx(LiveEditor, { className: "code-editor", onCodeChange: (code) => {
                                setCurrentCode(code);
                            } }, void 0) }), void 0) }, void 0)),
                _jsx(LiveError, { className: "code-error-wrap" }, void 0)] }), void 0) }, void 0));
};

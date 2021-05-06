import { jsx as _jsx } from "react/jsx-runtime";
import 'vite/dynamic-import-polyfill';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { App } from './App';
export function render(ssrHref) {
    return ReactDOMServer.renderToString(_jsx(React.StrictMode, { children: _jsx(App, { ssrHref: ssrHref }, void 0) }, void 0));
}

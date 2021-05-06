import { jsx as _jsx } from "react/jsx-runtime";
import 'vite/dynamic-import-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
if (import.meta.env.PROD) {
    ReactDOM.hydrate(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0), document.getElementById('app'));
}
else {
    ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0), document.getElementById('app'));
}

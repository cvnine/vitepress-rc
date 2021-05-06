import { jsx as _jsx } from "react/jsx-runtime";
import { MDXProvider } from '@mdx-js/react';
import { Wrap } from './style';
import { API, CodeBlock } from 'vitepress-rc';
export const Content = (props) => {
    return (_jsx(Wrap, { children: _jsx(MDXProvider, Object.assign({ components: {
                API: API,
                pre: (props) => _jsx("div", Object.assign({}, props), void 0),
                code: CodeBlock,
            } }, { children: props.children }), void 0) }, void 0));
};

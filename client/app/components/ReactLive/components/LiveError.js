import { jsx as _jsx } from "react/jsx-runtime";
import LiveContext from './LiveContext';
export default function LiveError(props) {
    return _jsx(LiveContext.Consumer, { children: ({ error }) => (error ? _jsx("pre", Object.assign({}, props, { children: error }), void 0) : null) }, void 0);
}

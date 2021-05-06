import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { Wrap } from './style';
import { ArrowLeft, ArrowRight, OutboundLink } from '../Icons';
import { Context, useSideData } from 'vitepress-rc';
import { useEditLink } from '../../hooks/useEditLink';
import { useNextPrevLink } from '../../hooks/useNextPrevLink';
import { resolveLink } from '../../utils';
function getDate(time) {
    let now = new Date(time), y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
    return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + now.toTimeString().substr(0, 8);
}
function getLastUpdatedText(themeConfig) {
    const p = themeConfig.lastUpdated;
    return p === true || p === undefined ? 'Last Updated' : p;
}
export default function ContentFooter() {
    const { themeConfig, base } = useSideData();
    const route = useContext(Context);
    const { url, text } = useEditLink();
    const { next, prev, hasLinks } = useNextPrevLink();
    const time = getDate(route.data.lastUpdated);
    let lastUpdatedText = getLastUpdatedText(themeConfig);
    return (_jsxs(Wrap, { children: [_jsxs("div", Object.assign({ className: "page-footer" }, { children: [_jsx("div", Object.assign({ className: "page-footer-edit" }, { children: url && (_jsxs(_Fragment, { children: [_jsx("a", Object.assign({ target: "_blank", rel: "noopener noreferrer", href: url }, { children: text }), void 0),
                                _jsx(OutboundLink, {}, void 0)] }, void 0)) }), void 0),
                    _jsx("div", Object.assign({ className: "last-updated" }, { children: lastUpdatedText && (_jsxs(_Fragment, { children: [_jsxs("span", { children: [lastUpdatedText, "\uFF1A"] }, void 0), time] }, void 0)) }), void 0)] }), void 0),
            hasLinks && (_jsxs("div", Object.assign({ className: "page-next-prev-link" }, { children: [prev ? (_jsxs("div", { children: [_jsx(ArrowLeft, {}, void 0),
                            _jsx("a", Object.assign({ href: resolveLink(base, prev.link) }, { children: prev.text }), void 0)] }, void 0)) : (_jsx("i", {}, void 0)),
                    next ? (_jsxs("div", { children: [_jsx("a", Object.assign({ href: resolveLink(base, next.link) }, { children: next.text }), void 0),
                            _jsx(ArrowRight, {}, void 0)] }, void 0)) : (_jsx("i", {}, void 0))] }), void 0))] }, void 0));
}

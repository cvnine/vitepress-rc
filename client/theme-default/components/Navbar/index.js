import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Wrap } from './style';
import { NavLink, BaseLink } from '../Link';
import { useSideData } from 'vitepress-rc';
export default function Navbar(props) {
    const sideData = useSideData();
    return (_jsxs(Wrap, { children: [_jsx("button", { className: "toggle", onClick: props.onMobileMenuClick }, void 0),
            _jsx(BaseLink, Object.assign({ to: sideData.base }, { children: sideData.title }), void 0),
            _jsx("nav", { children: sideData.themeConfig.nav &&
                    sideData.themeConfig.nav.map((nav) => {
                        if ('items' in nav) {
                            return _jsx(_Fragment, {}, void 0);
                        }
                        else {
                            return (_jsx("span", { children: _jsx(NavLink, { nav: nav }, void 0) }, nav.text));
                        }
                    }) }, void 0)] }, void 0));
}

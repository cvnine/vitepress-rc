import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Wrap } from './style';
import { useSideData } from 'vitepress-rc';
import { NavLink } from '../Link';
import SlugMenu from '../SlugMenu';
import { resolveLink } from '../../utils';
export default function SideMenu(props) {
    const sideData = useSideData();
    return (_jsx(Wrap, Object.assign({ hiddenMenus: props.sideBarItems.length === 0, mobileMenuCollapsed: !props.mobileMenuCollapsed }, { children: _jsxs("div", Object.assign({ className: "menu-content" }, { children: [sideData.themeConfig.nav && (_jsx("div", Object.assign({ className: "mobile-area" }, { children: _jsx("ul", Object.assign({ className: "nav-list" }, { children: sideData.themeConfig.nav.map((nav) => {
                            if ('items' in nav) {
                                return _jsx(_Fragment, {}, void 0);
                            }
                            else {
                                return (_jsx("li", { children: _jsx(NavLink, { nav: nav }, void 0) }, nav.text));
                            }
                        }) }), void 0) }), void 0)),
                _jsx("ul", Object.assign({ className: "list" }, { children: props.sideBarItems.map((item) => {
                        const link = resolveLink(sideData.base, item.link);
                        return (_jsxs("li", Object.assign({ "data-sidebar-level": item.level }, { children: [link ? (_jsx("a", Object.assign({ href: link, className: `${item.isActive ? 'active' : ''}` }, { children: item.text }), void 0)) : (_jsx("p", { children: item.text }, void 0)),
                                item.children && item.children.length > 0 && (_jsx(SlugMenu, { className: "side", slugs: item.children }, void 0))] }), item.text));
                    }) }), void 0)] }), void 0) }), void 0));
}

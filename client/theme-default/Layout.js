import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import { Context, Content } from 'vitepress-rc';
import { Wrap, GlobalStyle, WrapMain } from './style';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import { useSideBar } from './hooks/useSideBar';
import ContentFooter from './components/ContentFooter';
export default function Layout() {
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const { component: Comp } = useContext(Context);
    const sideBarItems = useSideBar();
    return (_jsxs(Wrap, Object.assign({ onClick: () => {
            if (menuCollapsed)
                return;
            setMenuCollapsed(true);
        } }, { children: [_jsx(GlobalStyle, {}, void 0),
            _jsx(Navbar, { onMobileMenuClick: (ev) => {
                    setMenuCollapsed((val) => !val);
                    ev.stopPropagation();
                } }, void 0),
            _jsx(SideMenu, { mobileMenuCollapsed: menuCollapsed, sideBarItems: sideBarItems }, void 0),
            _jsx(WrapMain, Object.assign({ hiddenMenus: sideBarItems.length === 0 }, { children: _jsx(Content, { children: Comp ? (_jsxs(_Fragment, { children: [_jsx(Comp, {}, void 0),
                            _jsx(ContentFooter, {}, void 0)] }, void 0)) : null }, void 0) }), void 0)] }), void 0));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OutboundLink } from '../Icons';
import { useNavLink } from '../../hooks/useNavLink';
export const NavLink = ({ nav }) => {
    const { aProps, isExternal } = useNavLink(nav);
    return (_jsxs("a", Object.assign({}, aProps, { children: [nav.text, " ", isExternal && _jsx(OutboundLink, {}, void 0)] }), void 0));
};

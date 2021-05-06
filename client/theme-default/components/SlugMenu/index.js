import { jsx as _jsx } from "react/jsx-runtime";
import { WrapUl } from './style';
import { useActiveSlug } from '../../hooks/useActiveSlug';
export default function SlugMenu({ slugs, className }) {
    const [activeHash, setActiveHash] = useActiveSlug();
    return (_jsx(WrapUl, Object.assign({ className: className }, { children: slugs.map((child) => {
            return (_jsx("li", Object.assign({ className: "slug-li", "data-slug-level": child.level, onClick: () => child.link && setActiveHash(child.link) }, { children: child.link ? (_jsx("a", Object.assign({ href: child.link, className: `${child.link === activeHash ? 'active' : ''}` }, { children: child.text }), void 0)) : (_jsx("span", { children: child.text }, void 0)) }), child.text));
        }) }), void 0));
}

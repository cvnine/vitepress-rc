import { useContext } from 'react';
import { useSideData, Context } from 'vitepress-rc';
import { getSideBarConfig } from '../utils';
function resolveAutoSidebar(headers, depth) {
    if (headers === undefined) {
        return [];
    }
    let ret = headers
        .filter((x) => x.level - 1 > ~~depth && x.level > 1)
        .map((x) => ({
        text: x.title,
        link: `#${x.slug}`,
        level: x.level,
        isActive: false,
    }));
    return ret;
}
function getSideMenu(sidebar, relativePath, headering) {
    let stack = [...sidebar];
    let result = [];
    while (stack.length !== 0) {
        const item = stack.shift();
        let menuItem = {
            text: item.text,
            link: item.link,
            level: item._level ? item._level : 1,
            isActive: false,
        };
        if (isActiveRoute(relativePath, item.link)) {
            menuItem.isActive = true;
            menuItem.children = headering;
        }
        result.push(menuItem);
        const children = item.children;
        if (children) {
            for (let i = children.length - 1; i >= 0; i--) {
                stack.unshift({ ...children[i], _level: item._level ? item._level + 1 : 2 });
            }
        }
    }
    return result;
}
export function normalize(path) {
    const hashRE = /#.*$/;
    const extRE = /(index)?\.(md|html)$/;
    return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}
export function isActiveRoute(relativePath, path) {
    if (path === undefined) {
        return false;
    }
    const routePath = normalize(`/${relativePath}`);
    const pagePath = normalize(path);
    return routePath === pagePath;
}
export function useSideBar() {
    const route = useContext(Context);
    const sideData = useSideData();
    // at first, we'll check if we can find the sidebar setting in frontmatter.
    const headers = route.data.headers;
    const frontSidebar = route.data.frontmatter.sidebar;
    const sidebarDepth = route.data.frontmatter.sidebarDepth;
    // if it's `false`, we'll just return an empty array here.
    if (frontSidebar === false) {
        return [];
    }
    // if it's `atuo`, render headers of the current page
    if (frontSidebar === 'auto') {
        return resolveAutoSidebar(headers, sidebarDepth);
    }
    // now, there's no sidebar setting at frontmatter; let's see the configs
    const themeSidebar = getSideBarConfig(sideData.themeConfig.sidebar || 'auto', route.data.relativePath);
    if (themeSidebar === false) {
        return [];
    }
    if (themeSidebar === 'auto') {
        return resolveAutoSidebar(headers, sidebarDepth);
    }
    return getSideMenu(themeSidebar, route.data.relativePath, resolveAutoSidebar(headers, sidebarDepth));
}

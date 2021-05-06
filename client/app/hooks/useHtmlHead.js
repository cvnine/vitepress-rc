import { inBrowser } from 'vitepress-rc';
import { useEffect } from 'react';
import { useSideData } from './useSideData';
let isFirstUpdate = true;
function updateHeadTags(newTags) {
    if (import.meta.env.PROD && isFirstUpdate) {
        // in production, the initial meta tags are already pre-rendered so we
        // skip the first update.
        isFirstUpdate = false;
        return;
    }
    const metaTags = Array.from(document.querySelectorAll('meta'));
    metaTags.forEach((el) => document.head.removeChild(el));
    metaTags.length = 0;
    if (newTags && newTags.length) {
        newTags.forEach((headConfig) => {
            const el = createHeadElement(headConfig);
            document.head.appendChild(el);
            metaTags.push(el);
        });
    }
}
function createHeadElement([tag, attrs, innerHTML]) {
    const el = document.createElement(tag);
    for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    if (innerHTML) {
        el.innerHTML = innerHTML;
    }
    return el;
}
function isMetaDescription(headConfig) {
    return headConfig[0] === 'meta' && headConfig[1] && headConfig[1].name === 'description';
}
function filterOutHeadDescription(head) {
    return head.filter((h) => !isMetaDescription(h));
}
export function useHtmlHead(route) {
    const siteData = useSideData();
    useEffect(() => {
        if (!inBrowser)
            return;
        const pageData = route.data;
        const pageTitle = pageData && pageData.title;
        const pageDescription = pageData && pageData.description;
        const frontmatterHead = pageData && pageData.frontmatter.head;
        document.title = (pageTitle ? pageTitle + ` | ` : ``) + siteData.title;
        updateHeadTags([
            ['meta', { charset: 'utf-8' }],
            [
                'meta',
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1',
                },
            ],
            [
                'meta',
                {
                    name: 'description',
                    content: pageDescription || siteData.description,
                },
            ],
            ...siteData.head,
            ...((frontmatterHead && filterOutHeadDescription(frontmatterHead)) || []),
        ]);
    }, [route.data, siteData]);
}

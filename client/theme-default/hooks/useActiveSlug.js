import { useEffect, useState } from 'react';
function isReachBottom() {
    return window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight;
}
function getAnchors() {
    return [].slice.call(document.querySelectorAll('.header-anchor-a'));
}
function getAnchorTop(anchor) {
    const pageOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--doc-nav-height')) || 0;
    return anchor.parentElement.offsetTop - pageOffset - 20;
}
function isAnchorActive(index, anchor, nextAnchor) {
    const scrollTop = window.scrollY;
    if (index === 0 && scrollTop === 0) {
        return [true, null];
    }
    if (scrollTop < getAnchorTop(anchor)) {
        return [false, null];
    }
    if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
        return [true, decodeURIComponent(anchor.hash)];
    }
    return [false, null];
}
function throttleAndDebounce(fn, delay) {
    let timeout;
    let called = false;
    return () => {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        if (!called) {
            fn();
            called = true;
            window.setTimeout(() => {
                called = false;
            }, delay);
        }
        else {
            timeout = window.setTimeout(fn, delay);
        }
    };
}
export function useActiveSlug() {
    const [activeHash, setActiveHash] = useState(null);
    function setActiveLink() {
        const anchors = getAnchors();
        if (isReachBottom())
            return;
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
            const nextAnchor = anchors[i + 1];
            const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);
            if (isActive) {
                window.history.replaceState(null, document.title, hash ? hash : ' ');
                setActiveHash(hash);
                return;
            }
        }
    }
    useEffect(() => {
        const onScroll = throttleAndDebounce(setActiveLink, 300);
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return [activeHash, setActiveHash];
}

import { jsx as _jsx } from "react/jsx-runtime";
import { getReact, getReactDom, getStyleSheetManager } from './render';
export function RemoveShadowRootSkeleton(root) {
    const span = root.querySelector('.shadow-skeleton');
    if (span) {
        root.removeChild(span);
    }
    const style = root.querySelector('style[data-shadow-skeleton="y"]');
    if (style) {
        root.removeChild(style);
    }
}
const errorBoundary = async ({ Element, errorCallback, shadowRoot, cssText, local }) => {
    const [React_P, ReactDom_P, StyleSheetManager] = await Promise.all([
        getReact(local),
        getReactDom(local),
        getStyleSheetManager(local),
    ]);
    class ErrorBoundary extends React_P.Component {
        componentDidCatch(error) {
            errorCallback(error);
        }
        render() {
            return typeof Element === 'function' ? _jsx(Element, {}, void 0) : Element;
        }
    }
    if (shadowRoot.current) {
        try {
            RemoveShadowRootSkeleton(shadowRoot.current);
            let reactRenderDom = shadowRoot.current.querySelector('.react-render');
            if (reactRenderDom) {
                ReactDom_P.unmountComponentAtNode(reactRenderDom);
            }
            else {
                reactRenderDom = document.createElement('div');
                reactRenderDom.classList.add('react-render');
                shadowRoot.current.appendChild(reactRenderDom);
            }
            let style = shadowRoot.current.querySelector('style[data-shadow-style="y"]');
            if (style) {
                style.textContent = cssText || '';
            }
            else {
                style = document.createElement('style');
                style.setAttribute('data-shadow-style', 'y');
                style.textContent = cssText || '';
                shadowRoot.current.appendChild(style);
            }
            let styleContainer = shadowRoot.current.querySelector('div.shadow-sheet');
            if (styleContainer) {
                shadowRoot.current.removeChild(styleContainer);
            }
            styleContainer = document.createElement('div');
            styleContainer.classList.add('shadow-sheet');
            shadowRoot.current.appendChild(styleContainer);
            ReactDom_P.render(_jsx(StyleSheetManager, Object.assign({ target: styleContainer }, { children: _jsx(ErrorBoundary, {}, void 0) }), void 0), reactRenderDom);
        }
        catch (error) {
            errorCallback(error);
        }
    }
};
export default errorBoundary;

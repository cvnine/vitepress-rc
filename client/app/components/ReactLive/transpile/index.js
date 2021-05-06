import transform from './transform';
import errorBoundary from './errorBoundary';
import evalCode from './evalCode';
import React from 'react';
function isClass(fn) {
    try {
        Reflect.construct(String, [], fn);
    }
    catch (e) {
        return false;
    }
    return true;
}
function isReactElement(element) {
    return (React.isValidElement(element) ||
        typeof element === 'string' ||
        typeof element === 'number' ||
        typeof element === 'boolean' ||
        Array.isArray(element));
}
export const renderElementAsync = ({ code = '', scope = {}, local = true }, resultCallback, errorCallback, shadowRoot) => {
    const render = (cssText) => (Element) => {
        if (Element == null || Element === '') {
            errorCallback(new SyntaxError('`export default` must be called with valid JSX.'));
            return;
        }
        if (isReactElement(Element)) {
            errorBoundary({ Element, errorCallback, shadowRoot, cssText, local });
            resultCallback();
            return;
        }
        if (typeof Element === 'function') {
            if (isClass(Element)) {
                if (Element.prototype.isReactComponent) {
                    errorBoundary({ Element, errorCallback, shadowRoot, cssText, local });
                    resultCallback();
                    return;
                }
            }
            else {
                const returnBack = Element();
                if (returnBack != null && returnBack !== '' && isReactElement(returnBack)) {
                    errorBoundary({ Element, errorCallback, shadowRoot, cssText, local });
                    resultCallback();
                    return;
                }
            }
        }
        errorCallback(new SyntaxError('`export default` must be called with valid JSX.'));
    };
    transform({ code, local, scope })
        .then(({ result, imports, error, cssText }) => {
        if (error)
            throw error;
        evalCode(result, { ...imports, render: render(cssText) });
    })
        .catch((err) => {
        errorCallback(err);
    });
};

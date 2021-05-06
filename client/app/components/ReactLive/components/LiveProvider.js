import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import LiveContext from './LiveContext';
import { renderElementAsync } from '../transpile';
import { getReactDom } from '../transpile/render';
import { RemoveShadowRootSkeleton } from '../transpile/errorBoundary';
export default function LiveProvider({ code: prevCode, local, scope, disabled, transformCode, children, }) {
    const [error, setError] = useState('');
    const shadowRoot = useRef(null);
    const onChange = (editCode) => {
        transpile({ code: editCode, scope, transformCode });
    };
    const transpile = ({ code, scope, transformCode }) => {
        const input = {
            code: transformCode(code),
            scope,
            local,
        };
        const errorCallback = async (err) => {
            setError(err.toString());
            if (shadowRoot.current) {
                const ReactDom_P = await getReactDom(local);
                RemoveShadowRootSkeleton(shadowRoot.current);
                let reactRenderDom = shadowRoot.current.querySelector('.react-render');
                if (reactRenderDom) {
                    ReactDom_P.unmountComponentAtNode(reactRenderDom);
                }
                shadowRoot.current.innerHTML = '';
            }
        };
        const renderElement = () => {
            setError(null);
        };
        try {
            renderElementAsync(input, renderElement, errorCallback, shadowRoot);
        }
        catch (error) {
            errorCallback(error);
        }
    };
    useEffect(() => {
        transpile({ code: prevCode, scope, transformCode });
    }, [prevCode, local ? scope : null, transformCode]);
    return (_jsx(LiveContext.Provider, Object.assign({ value: {
            code: prevCode,
            disabled,
            shadowRoot,
            error,
            onChange,
        } }, { children: children }), void 0));
}
LiveProvider.defaultProps = {
    disabled: false,
    scope: {},
    local: true,
    transformCode: (code) => code,
};

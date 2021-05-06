import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import Theme from '@virtual-module/theme/index';
import { useRoute } from './hooks/useRoute';
import Context from './context';
import { useHtmlHead } from './hooks/useHtmlHead';
export function App({ ssrHref }) {
    const { route } = useRoute(Theme.NotFound, ssrHref);
    useHtmlHead(route);
    if (route.data === null) {
        return _jsx(_Fragment, {}, void 0);
    }
    return (_jsx(Context.Provider, Object.assign({ value: route }, { children: _jsx(Theme.Layout, {}, void 0) }), void 0));
}

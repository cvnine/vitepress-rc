import React from 'react';
export interface ILiveProvider {
    code: string;
    disabled: boolean;
    scope: Record<string, any>;
    local: boolean;
    transformCode: (code: string) => string;
    children: React.ReactNode;
}
declare function LiveProvider({ code: prevCode, local, scope, disabled, transformCode, children, }: ILiveProvider): JSX.Element;
declare namespace LiveProvider {
    var defaultProps: {
        disabled: boolean;
        scope: {};
        local: boolean;
        transformCode: (code: string) => string;
    };
}
export default LiveProvider;

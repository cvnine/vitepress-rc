import { ErrorCallback } from './errorBoundary';
import React from 'react';
declare type ResultCallback = () => void;
export declare const renderElementAsync: ({ code, scope, local }: {
    code?: string | undefined;
    scope?: {} | undefined;
    local?: boolean | undefined;
}, resultCallback: ResultCallback, errorCallback: ErrorCallback, shadowRoot: React.MutableRefObject<ShadowRoot | null>) => void;
export {};

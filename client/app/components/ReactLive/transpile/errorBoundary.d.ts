import type React from 'react';
export declare type ErrorCallback = (err: Error) => void;
interface IErrorBoundary {
    Element: React.ReactNode;
    errorCallback: ErrorCallback;
    shadowRoot: React.MutableRefObject<ShadowRoot | null>;
    cssText: string | undefined;
    local: boolean;
}
export declare function RemoveShadowRootSkeleton(root: ShadowRoot): void;
declare const errorBoundary: ({ Element, errorCallback, shadowRoot, cssText, local }: IErrorBoundary) => Promise<void>;
export default errorBoundary;

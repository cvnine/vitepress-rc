import { ComponentType } from 'react';
import type { Route } from '@vitepress-rc/types';
export interface Router {
    route: Route;
    go: (href?: string) => Promise<void>;
}
export declare function useRoute(fallbackComponent?: ComponentType<any>, ssrHref?: string): {
    route: Route;
};
export declare function pathToFile(path: string): string;

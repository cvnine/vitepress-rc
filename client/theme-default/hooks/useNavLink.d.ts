import type { DefaultTheme } from '@vitepress-rc/types';
export declare function useNavLink(nav: DefaultTheme.NavItemWithLink): {
    aProps: {
        className: string;
        href: string;
        target: string | undefined;
        rel: string | undefined;
        'aria-label': string | undefined;
    };
    isExternal: boolean;
};

import type { DefaultTheme } from '@vitepress-rc/types';
export declare function useNextPrevLink(): {
    next: DefaultTheme.SideBarLink | null;
    prev: DefaultTheme.SideBarLink | null;
    hasLinks: boolean;
};

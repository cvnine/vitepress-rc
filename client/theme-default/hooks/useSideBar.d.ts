export declare type FlatSidebar = {
    text: string;
    link?: string;
    level?: number;
    isActive: boolean;
    children?: FlatSidebar[];
};
export declare function normalize(path: string): string;
export declare function isActiveRoute(relativePath: string, path?: string): boolean;
export declare function useSideBar(): FlatSidebar[];

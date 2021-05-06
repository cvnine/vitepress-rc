import type { SiteConfig, SiteData, UserConfig } from '../../types/types';
export declare function resolveConfig(root?: string): Promise<SiteConfig>;
export declare function resolveUserConfig(root: string): Promise<UserConfig<import("../../types/types").DefaultTheme.Config>>;
export declare function resolveSiteData(root: string): Promise<SiteData<any>>;

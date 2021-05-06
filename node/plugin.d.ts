import type { Plugin as VitePlugin } from 'vite';
import type { SiteConfig } from '../../types/types';
export declare function createVitePlugin(root: string, { configPath, alias, md, siteData, pages, themeDir }: SiteConfig, ssr?: boolean, pageToHashMap?: Record<string, string>): VitePlugin[];

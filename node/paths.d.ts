import type { Alias } from 'vite';
import type { UserConfig } from '../../types/types';
export declare const APP_PATH: string;
export declare const DEFAULT_THEME_PATH: string;
export declare const SPECIAL_IMPORT_SITE_DATA = "@virtual-module/siteData";
export declare const SPECIAL_IMPORT_THEME = "@virtual-module/theme";
export declare const SPECIAL_IMPORT_CODE_SCOPE = "@virtual-module/codeScope";
export declare function resolveAliases(themeDir: string, userConfig: UserConfig): Alias[];

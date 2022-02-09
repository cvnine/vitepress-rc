import path from 'path'
import type { Alias } from 'vite'
import type { UserConfig } from '@vitepress-rc/types'

export const DIST_CLIENT_PATH = path.join(__dirname, '../client')
export const APP_PATH = path.join(__dirname, '../client/app')
export const DEFAULT_THEME_PATH = path.join(__dirname, '../client/theme-default')

//客户端的模拟路径
export const SPECIAL_IMPORT_SITE_DATA = '@virtual-module/siteData'
export const SPECIAL_IMPORT_THEME = '@virtual-module/theme'
export const SPECIAL_IMPORT_CODE_SCOPE = '@virtual-module/codeScope'

export function resolveAliases(themeDir: string, userConfig: UserConfig): Alias[] {
	const paths: Record<string, string> = {
		...userConfig.alias,
		[SPECIAL_IMPORT_THEME]: themeDir,
	}

	return [
		...Object.keys(paths).map((p) => ({
			find: p,
			replacement: paths[p],
		})),
		{
			find: /^vitepress-rc$/,
			replacement: path.join(__dirname, '../client/index'),
		},
		{
			find: /^vitepress-rc\/theme$/,
			replacement: path.join(__dirname, '../client/theme-default/index'),
		},
		// alias for local linked development
		{
			find: /^vitepress-rc\//,
			replacement: path.join(__dirname, '../../') + '/',
		},
	]
}

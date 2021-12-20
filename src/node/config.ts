import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'
import { globby } from 'globby'
import { normalizePath, loadConfigFromFile } from 'vite'
import { APP_PATH, DEFAULT_THEME_PATH, resolveAliases } from './alias'
import type { SiteConfig, SiteData, UserConfig, RawConfigExports, LocaleConfig } from '@vitepress-rc/types'

const resolve = (root: string, file: string) => {
	return normalizePath(path.resolve(root, `.vitepressrc`, file))
}

export async function resolveConfig(
	root: string = process.cwd(),
	command: 'serve' | 'build' = 'serve',
	mode = 'development'
): Promise<SiteConfig> {
	const [userConfig, configPath] = await resolveUserConfig(root, command, mode)
	const siteData = await resolveSiteData(root, userConfig)
	const srcDir = path.resolve(root, userConfig.srcDir || '.')

	//主题路径
	const userThemeDir = resolve(root, 'theme')
	const themeDir = (await fs.pathExists(userThemeDir)) ? userThemeDir : DEFAULT_THEME_PATH

	const config = {
		root,
		srcDir,
		siteData,
		themeDir,
		pages: await globby(['**.md'], { cwd: srcDir, ignore: ['**/node_modules', ...(userConfig.srcExclude || [])] }),
		configPath,
		outDir: resolve(root, 'dist'),
		tempDir: path.resolve(APP_PATH, 'temp'),
		alias: resolveAliases(themeDir, userConfig),
		md: userConfig.md || {},
		vite: userConfig.vite,
		shouldPreload: userConfig.shouldPreload,
		mpa: !!userConfig.mpa,
	}

	return config
}

const supportedConfigExtensions = ['js', 'ts', '.mjs', 'mts']

export async function resolveUserConfig(root: string, command: 'serve' | 'build', mode: string) {
	let configPath
	for (const ext of supportedConfigExtensions) {
		const p = resolve(root, `config.${ext}`)
		if (await fs.pathExists(p)) {
			configPath = p
			break
		}
	}

	const userConfig: RawConfigExports = configPath
		? ((
				await loadConfigFromFile(
					{
						command,
						mode,
					},
					configPath,
					root
				)
		  )?.config as any)
		: {}

	if (configPath) {
		console.log(`loaded config at ${chalk.yellow(configPath)}`)
	} else {
		console.log(`no config file found.`)
	}

	return [await resolveConfigExtends(userConfig), configPath] as const
}

async function resolveConfigExtends(config: RawConfigExports): Promise<UserConfig> {
	const resolved = await (typeof config === 'function' ? config() : config)
	return resolved
}

export async function resolveSiteData(root: string, userConfig?: UserConfig): Promise<SiteData> {
	const _userConfig = userConfig || (await resolveUserConfig(root, 'serve', 'development'))[0]

	return {
		lang: _userConfig.lang || 'en-US',
		title: _userConfig.title || 'VitePress-rc',
		description: _userConfig.description || 'A VitePress-rc site',
		head: _userConfig.head || [],
		base: _userConfig.base ? _userConfig.base.replace(/([^/])$/, '$1/') : '/',
		themeConfig: _userConfig.themeConfig || {},
		locales: _userConfig.locales || {},
		langs: createLangDictionary(_userConfig),
	}
}

export function createLangDictionary(siteData: {
	themeConfig?: Record<string, any>
	locales?: Record<string, LocaleConfig>
}) {
	const { locales } = siteData.themeConfig || {}
	const siteLocales = siteData.locales
	return locales && siteLocales
		? Object.keys(locales).reduce((langs, path) => {
				langs[path] = {
					label: locales![path].label,
					lang: siteLocales[path].lang,
				}
				return langs
		  }, {} as Record<string, { lang: string; label: string }>)
		: {}
}

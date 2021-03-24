import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'
import globby from 'globby'
import { APP_PATH, DEFAULT_THEME_PATH, resolveAliases } from './paths'
import { UserConfig } from '../types/types'

const resolve = (root: string, file: string) => {
	return path.resolve(root, `.vitepressrc`, file)
}

export async function resolveConfig(root: string = process.cwd()) {
	const userConfig = await resolveUserConfig(root)
	const site = await resolveSiteData(root)

	//主题路径
	const userThemeDir = resolve(root, 'theme')
	const themeDir = (await fs.pathExists(userThemeDir)) ? userThemeDir : DEFAULT_THEME_PATH

	const config = {
		root,
		site,
		themeDir,
		pages: await globby(['**.md'], { cwd: root, ignore: ['node_modules'] }),
		configPath: resolve(root, 'config.js'),
		outDir: resolve(root, 'dist'),
		alias: resolveAliases(themeDir, userConfig),
		tempDir: path.resolve(APP_PATH, 'temp'),
		plugin: userConfig.plugin,
	}

	return config
}

export async function resolveUserConfig(root: string) {
	const configPath = resolve(root, 'config.js')
	const hasUserConfig = await fs.pathExists(configPath)

	delete require.cache[configPath]

	const userConfig: UserConfig = hasUserConfig ? require(configPath) : {}
	if (hasUserConfig) {
		console.log(`loaded config at ${chalk.yellow(configPath)}`)
	} else {
		console.log(`no config file found.`)
	}

	return userConfig
}

export async function resolveSiteData(root: string) {
	const userConfig = await resolveUserConfig(root)

	return {
		lang: userConfig.lang || 'en-US',
		title: userConfig.title || 'VitePress',
		description: userConfig.description || 'A VitePress site',
		base: userConfig.base ? userConfig.base.replace(/([^/])$/, '$1/') : '/',
		themeConfig: userConfig.themeConfig || {},
	}
}

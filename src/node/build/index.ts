import fs from 'fs-extra'
import { BuildOptions } from 'vite'
import { resolveConfig } from '../config'
import { bundle } from './bundle'

export async function build(root: string, buildOptions: BuildOptions = {}) {
	const start = Date.now()
	process.env.NODE_ENV = 'production'

	const siteConfig = await resolveConfig(root)

	try {
		const [] = await bundle(siteConfig, buildOptions)
	} catch (err) {}
}

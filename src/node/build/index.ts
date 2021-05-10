import fs from 'fs-extra'
import ora from 'ora'
import slash from 'slash'
import path from 'path'
import { resolveConfig } from '../config'
import { bundle, failMark, okMark } from './bundle'
import { renderPage } from './render'
import { APP_PATH } from '../paths'
import { cacher } from '../transform/utils/cache'
import type { BuildOptions } from 'vite'
import type { OutputChunk, OutputAsset } from 'rollup'

export async function build(root: string, buildOptions: BuildOptions = {}) {
	const start = Date.now()
	process.env.NODE_ENV = 'production'

	const siteConfig = await resolveConfig(root)

	try {
		const [clientResult, , pageToHashMap] = await bundle(siteConfig, buildOptions)
		const spinner = ora()
		spinner.start('rendering pages...')

		try {
			const appChunk = clientResult.output.find(
				(chunk) =>
					chunk.type === 'chunk' &&
					chunk.isEntry &&
					chunk.facadeModuleId === slash(path.resolve(APP_PATH, 'index.js'))
			) as OutputChunk

			const cssChunk = clientResult.output.find(
				(chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css')
			) as OutputAsset

			// We embed the hash map string into each page directly so that it doesn't
			// alter the main chunk's hash on every build. It's also embedded as a
			// string and JSON.parsed from the client because it's faster than embedding
			// as JS object literal.
			const hashMapString = JSON.stringify(JSON.stringify(pageToHashMap))

			for (const page of siteConfig.pages) {
				await renderPage(siteConfig, page, clientResult, appChunk, cssChunk, hashMapString)
			}

			//md的内联img
			for (const [fromPath, name] of Object.entries(cacher.imgCache)) {
				await fs.copyFile(fromPath, path.join(siteConfig.outDir, './assets/', name))
			}
		} catch (e) {
			spinner.stopAndPersist({
				symbol: failMark,
			})
			throw e
		}
		spinner.stopAndPersist({
			symbol: okMark,
		})
	} finally {
		await fs.remove(siteConfig.tempDir)
	}

	console.log(`build complete in ${((Date.now() - start) / 1000).toFixed(2)}s.`)
}

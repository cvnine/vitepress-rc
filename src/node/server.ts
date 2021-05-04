import { createServer as createViteServer, ServerOptions } from 'vite'
import { resolveConfig } from './config'
import { createVitePlugin } from './plugin'

export async function createServer(root: string = process.cwd(), serverOptions: ServerOptions = {}) {
	const config = await resolveConfig(root)

	return createViteServer({
		root,
		base: config.siteData.base,
		plugins: createVitePlugin(root, config),
		server: serverOptions,
		optimizeDeps: {
			include: [
				'react/jsx-runtime',
				'react',
				'react-dom',
				'styled-components',
				'@mdx-js/react',
				'prism-react-renderer',
				'react-simple-code-editor',
				'copy-text-to-clipboard',
			],
		},
	})
}

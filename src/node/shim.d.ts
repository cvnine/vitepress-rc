import mdx from '@mdx-js/mdx'
import { Processor } from 'unified'

declare module '@mdx-js/mdx' {
	function createCompiler(options?: mdx.Options): Processor
	mdx.createCompiler = createCompiler
}

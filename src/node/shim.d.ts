import mdx from '@mdx-js/mdx'
import { Processor } from 'unified'
import { Node } from 'unist'

declare module '@mdx-js/mdx' {
	function createCompiler(options?: mdx.Options): Processor
	mdx.createCompiler = createCompiler
}

declare module 'unist-util-find' {
	const fn: (node: Node, arg: any) => Node | undefined
	export default fn
}

import { transform as _transform } from 'buble'
import React from 'react'

interface ITransform {
	result: string
	imports: {
		[key: string]: any
	}
	error?: Error
}

const opts = {
	objectAssign: 'Object.assign',
	transforms: {
		dangerousForOf: true,
		dangerousTaggedTemplateString: true,
		asyncAwait: false,
		generator: false,
	},
}

const makeRender = (defaultFn: React.ComponentType) => {
	return ['', 'render(', defaultFn, ')'].join('\n')
}

async function transform(code: string): Promise<ITransform> {
	try {
		const [{ default: $ }, babel] = await Promise.all([
			import('https://jspm.dev/gogocode'),
			import('https://jspm.dev/@babel/standalone'),
		])

		let _code = code

		const imports = $(code).find(`import $_$1 from '$_$2'`)
		const exportDefault = $(code).find(`export default $_$`)

		let defaultFn = () => null

		console.log('imports :>> ', imports)

		try {
			let match = exportDefault.match
			defaultFn = match[0][0].value
			_code = $(_code).replace(`export default $_$`, '').generate()
		} catch (err) {
			return {
				result: '',
				imports: {},
				error: new SyntaxError('`export default` must be called'),
			}
		}

		let trans = babel.transform(_code + makeRender(defaultFn), {
			filename: 'transformedCode.ts',
			presets: [
				'react',
				[
					'typescript',
					{
						isTSX: true,
						allExtensions: true,
					},
				],
			],
		})

		return { result: trans.code, imports: {} }
	} catch (err) {
		console.log('buble :>> ')
		return {
			result: _transform(code, opts).code,
			imports: {},
		}
	}
}

export default transform

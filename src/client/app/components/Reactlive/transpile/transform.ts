import { transform as _transform } from 'buble'
import React from 'react'

interface ITransform {
	result: string
	imports: {
		[key: string]: any
	}
	error?: Error
}

interface ImportValue {
	value: string
	isDestructing: boolean
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

function isDestructing(tokens: any, start: number) {
	for (let index = start; index < tokens.length; index++) {
		const token = tokens[index]
		if (token.value === 'from' || token.value === '{') break
		if (token.value === '}') {
			return true
		}
	}
	return false
}

async function transform(code: string): Promise<ITransform> {
	try {
		const [{ default: $ }, babel] = await Promise.all([
			import('https://jspm.dev/gogocode'),
			import('https://jspm.dev/@babel/standalone'),
		])

		let _code = code

		/* import */
		let _imports: Record<string, ImportValue[]> = {}
		$(_code)
			.find(`import $_$1 from '$_$2'`)
			.each((item: any) => {
				let node: ImportValue[] = item.match[1].map((val: any) => {
					let loc = val.node.loc
					return {
						value: val.value,
						isDestructing: isDestructing(loc.tokens, loc.start.token + 1),
					}
				})
				let importName: string = item.match[2][0].value
				;(_imports[importName] || (_imports[importName] = [])).push(...node)
			})

		const entriesImports: [string, ImportValue[]][] = Object.entries(_imports)
		let imports: any = {}
		try {
			const r = await Promise.all(entriesImports.map((x) => import(`https://jspm.dev/${x[0]}`)))
			for (let index = 0; index < entriesImports.length; index++) {
				let [key, val] = entriesImports[index]
				for (const variable of val) {
					if (variable.isDestructing) {
						imports[variable.value] = r[index].default[variable.value]
					} else {
						imports[variable.value] = r[index].default
					}
				}
			}
		} catch (err) {
			return {
				result: '',
				imports: {},
				error: new SyntaxError('Failed to fetch dynamically imported module. Please check out your modules'),
			}
		}

		_code = $(_code).replace(`import $_$1 from '$_$2'`, '').generate()

		/* export default */
		const exportDefault = $(_code).find(`export default $_$`)
		let defaultFn = () => null

		if (exportDefault[0]) {
			if (exportDefault[1]) {
				return {
					result: '',
					imports: {},
					error: new SyntaxError('multiple `export default` error'),
				}
			} else {
				let match = exportDefault[0].match
				defaultFn = match[0][0].value
				_code = $(_code).replace(`export default $_$`, '').generate()
			}
		} else {
			return {
				result: '',
				imports: {},
				error: new SyntaxError('`export default` must be called'),
			}
		}

		const babelResult = babel.transform(_code + makeRender(defaultFn), {
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

		return { result: babelResult.code, imports }
	} catch (err) {
		console.log('buble :>> ', err)
		return {
			result: _transform(code, opts).code,
			imports: {},
		}
	}
}

export default transform

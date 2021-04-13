import React from 'react'

interface ITransform {
	result: string
	imports: {
		[key: string]: any
	}
	error?: Error
	cssText?: string
}

interface ImportValue {
	value: string
	isDestructing: boolean
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
			import('https://jspm.dev/gogocode@0.2.9'),
			import('https://jspm.dev/@babel/standalone'),
		])

		let _code = code

		/* import */
		let tmpImportMap: Record<string, ImportValue[]> = {}
		let importJs: { [key: string]: any } = {}

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
				;(tmpImportMap[importName] || (tmpImportMap[importName] = [])).push(...node)
			})

		const entriesImports: [string, ImportValue[]][] = Object.entries(tmpImportMap)
		try {
			const r = await Promise.all(
				entriesImports.map((x) => {
					if (x[0].startsWith('http')) {
						return import(/* @vite-ignore */ `${x[0]}`)
					} else {
						return import(/* @vite-ignore */ `https://jspm.dev/${x[0]}`)
					}
				})
			)
			for (let index = 0; index < entriesImports.length; index++) {
				let [key, val] = entriesImports[index]
				for (const variable of val) {
					if (variable.isDestructing) {
						importJs[variable.value] = r[index].default[variable.value]
					} else {
						importJs[variable.value] = r[index].default
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

		/* import css */
		let importCss: string[] = []
		let cssText: string = ''
		$(_code)
			.find(`import '$_$'`)
			.each((item: any) => {
				let value = item.match[0][0].value
				if (/\.css$/.test(value)) {
					importCss.push(value)
				}
			})

		try {
			const r = await Promise.all(importCss.map((x) => fetch(/* @vite-ignore */ `${x}`).then((x) => x.text())))
			cssText = r.join('\n')
		} catch (err) {}

		/* export default */
		const exportDefault = $(_code).find(`export default $_$`)

		if (exportDefault.length === 0) {
			return {
				result: '',
				imports: {},
				error: new SyntaxError('`export default` must be called'),
			}
		} else if (exportDefault.length > 1) {
			return {
				result: '',
				imports: {},
				error: new SyntaxError('multiple `export default` error'),
			}
		}

		let match = exportDefault[0].match
		let defaultFn = match[0][0].value

		//移除import export 影响
		_code = $(_code).replace(`import '$_$'`, '').replace(`export default $_$`, '').generate()

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

		return { result: babelResult.code, imports: importJs, cssText }
	} catch (error) {
		return {
			result: '',
			imports: {},
			error,
		}
	}
}

export default transform

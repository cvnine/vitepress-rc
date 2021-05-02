import React from 'react'

const fakeHost = `https://a.com`

interface ITransform {
	code: string
	local: boolean
	scope: Record<string, any>
}

interface TransformReturnType {
	result: string
	imports: Record<string, any>
	error?: Error
	cssText?: string
}

interface ImportValue {
	value: string
	isDestructing: boolean
}

function makeRender(_code: string, defaultFn: React.ComponentType) {
	return [_code, '', 'render(', defaultFn, ')'].join('\n')
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

function errorReturn(err: string) {
	return {
		result: '',
		imports: {},
		error: new SyntaxError(err),
	}
}

async function transform({ code, local, scope }: ITransform): Promise<TransformReturnType> {
	try {
		const url_gogocode = new URL('//jspm.dev/gogocode@0.2.9', fakeHost).href
		const url_babel = new URL('//jspm.dev/@babel/standalone', fakeHost).href
		const [{ default: $ }, babel] = await Promise.all([
			import(/* @vite-ignore */ url_gogocode),
			import(/* @vite-ignore */ url_babel),
		])

		let _code = code

		/* import */
		let tmpImportMap: Record<string, ImportValue[]> = {}
		let importJs: Record<string, any> = {}

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

		if (local) {
			for (let index = 0; index < entriesImports.length; index++) {
				let [key, val] = entriesImports[index]
				if (scope['js'][key]) {
					for (const variable of val) {
						if (variable.isDestructing) {
							importJs[variable.value] = scope['js'][key][variable.value]
						} else {
							importJs[variable.value] = scope['js'][key]
						}
					}
				}
			}
		} else {
			try {
				const r = await Promise.all(
					entriesImports.map((x) => {
						let url
						if (x[0].startsWith('//') || x[0].startsWith('http')) {
							url = new URL(`${x[0]}`, fakeHost).href
						} else {
							url = new URL(`//jspm.dev/${x[0]}`, fakeHost).href
						}
						return import(/* @vite-ignore */ url)
					})
				)
				for (let index = 0; index < entriesImports.length; index++) {
					let [, val] = entriesImports[index]
					for (const variable of val) {
						if (variable.isDestructing) {
							importJs[variable.value] = r[index].default[variable.value]
						} else {
							importJs[variable.value] = r[index].default
						}
					}
				}
			} catch (err) {
				return errorReturn('Failed to fetch dynamically imported module. Please check out your modules')
			}
		}

		/* import css */
		let cssText: string = ''
		let importCss: string[] = []
		$(_code)
			.find(`import '$_$'`)
			.each((item: any) => {
				let value = item.match[0][0].value
				if (/\.css$/.test(value)) {
					importCss.push(value)
				}
			})

		if (local) {
			//TODO 临时解决，后续 通过组件依赖来自动引入css
			let localImportCss = []
			for (const [key, val] of Object.entries(scope['css'])) {
				localImportCss.push((val as { default: string }).default)
			}
			cssText = localImportCss.join('\n')
		} else {
			try {
				const r = await Promise.all(
					importCss.map((x) => fetch(/* @vite-ignore */ `${x}`).then((x) => x.text()))
				)
				cssText = r.join('\n')
			} catch (err) {}
		}

		/* export default */
		const exportDefault = $(_code).find(`export default $_$`)

		if (exportDefault.length === 0) {
			return errorReturn('`export default` must be called')
		} else if (exportDefault.length > 1) {
			return errorReturn('multiple `export default` error')
		}

		let defaultFn = exportDefault[0].match[0][0].value

		//移除import export 影响
		_code = $(_code).replace(`import '$_$'`, '').replace(`export default $_$`, '').generate()

		const babelResult = babel.transform(makeRender(_code, defaultFn), {
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

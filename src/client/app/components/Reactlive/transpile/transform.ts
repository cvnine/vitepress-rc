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
	error?: any
	cssText?: string
}

interface ImportValue {
	value: string
	isDestructing: boolean
}

function makeRender(_code: string, defaultFn: string) {
	return [_code, '', 'render(', defaultFn, ')'].join('\n')
}

function errorReturn(err: string) {
	return {
		result: '',
		imports: {},
		error: new SyntaxError(err),
	}
}

let babelCache: ((value: unknown) => void)[] = []

function loadBabel() {
	if (window && window.Babel) {
		return window.Babel
	}
	let scriptArr = document.getElementsByTagName('script')
	for (let index = 0; index < scriptArr.length; index++) {
		const s = scriptArr[index]
		if (s.src.includes('babel.min.js')) {
			return new Promise((resolve) => {
				babelCache.push(resolve)
			})
		}
	}

	return new Promise((resolve, reject) => {
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.onload = function () {
			resolve(window.Babel)
			babelCache.forEach((cb) => cb(window.Babel))
		}
		script.onerror = function () {
			reject(new Error('Babel load error'))
		}
		script.src = `https://unpkg.com/@babel/standalone/babel.min.js`
		document.getElementsByTagName('head')[0].appendChild(script)
	})
}

async function transform({ code, local, scope }: ITransform): Promise<TransformReturnType> {
	try {
		const Babel = await loadBabel()
		const { ast } = Babel.transform(code, {
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
			ast: true,
		})

		let importJs: Record<string, { value: string; importedValue?: string }> = {}
		let importCss: string[] = []
		let defaultFn: string = ''

		for (const rootWv of ast.program.body) {
			if (rootWv.type === 'ImportDeclaration') {
				const { specifiers, source } = rootWv
				const { value: sourceValue } = source
				if (specifiers.length > 0) {
					//js
					for (const sp of specifiers) {
						if (sp.type === 'ImportDefaultSpecifier') {
							const {
								local: { name: localName },
							} = sp
							importJs[localName] = { value: sourceValue }
						} else if (sp.type === 'ImportNamespaceSpecifier') {
							const {
								local: { name: localName },
							} = sp
							importJs[localName] = { value: sourceValue }
						} else if (sp.type === 'ImportSpecifier') {
							const {
								imported: { name: importedValue },
								local: { name: localName },
							} = sp
							importJs[localName] = { value: sourceValue, importedValue }
						}
					}
				} else {
					//css
					const { value: cssValue } = source
					if (/\.css$/.test(cssValue)) {
						importCss.push(cssValue)
					}
				}
			} else if (rootWv.type === 'ExportDefaultDeclaration') {
				const { declaration } = rootWv
				if (declaration.type === 'Identifier') {
					if (defaultFn) {
						return errorReturn('Only one default export is allowed')
					} else {
						defaultFn = declaration.name
					}
				}
			}
		}

		if (!defaultFn) return errorReturn('No default export')

		let imports: Record<string, any> = {}
		let cssText: string = ''

		if (local) {
			//js
			for (const [key, val] of Object.entries(importJs)) {
				let { value, importedValue } = val
				if (scope['js'][value]) {
					if (importedValue) {
						imports[key] = scope['js'][value][importedValue]
					} else {
						imports[key] = scope['js'][value]
					}
				}
			}
			//css
			//TODO 临时解决，后续 通过组件依赖来自动引入css
			let localImportCss = []
			for (const [, val] of Object.entries(scope['css'])) {
				localImportCss.push((val as { default: string }).default)
			}
			cssText = localImportCss.join('\n')
		} else {
			//js
			try {
				const entries = Object.entries(importJs)
				const r = await Promise.all(
					entries.map(([, { value }]) => {
						let url
						if (value.startsWith('//') || value.startsWith('http')) {
							url = new URL(`${value}`, fakeHost).href
						} else {
							url = new URL(`//jspm.dev/${value}`, fakeHost).href
						}
						return import(/* @vite-ignore */ url)
					})
				)
				for (let index = 0; index < entries.length; index++) {
					const [key, { importedValue }] = entries[index]
					let { default: module } = r[index]
					if (importedValue) {
						imports[key] = module[importedValue]
					} else {
						imports[key] = module
					}
				}
			} catch (err) {
				return errorReturn('Failed to fetch dynamically imported module. Please check out your modules')
			}

			//css
			try {
				const r = await Promise.all(
					importCss.map((x) => fetch(/* @vite-ignore */ `${x}`).then((x) => x.text()))
				)
				cssText = r.join('\n')
			} catch (err) {}
		}

		//移除import export 影响
		ast.program.body = ast.program.body.filter(
			(x: any) =>
				x.type !== 'ImportDeclaration' &&
				x.type !== 'ExportNamedDeclaration' &&
				x.type !== 'ExportDefaultDeclaration' &&
				x.type !== 'ExportAllDeclaration'
		)

		const r = Babel.transformFromAst(ast, '', {
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
			ast: true,
		})

		return { result: makeRender(r.code, defaultFn), imports, cssText }
	} catch (error) {
		return {
			result: '',
			imports: {},
			error,
		}
	}
}

export default transform

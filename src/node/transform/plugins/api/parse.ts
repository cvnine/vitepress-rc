import * as parser from 'react-docgen-typescript'
import { cacher } from './cache'

export interface ApiProp {
	/**
	 * component property name
	 */
	identifier: string
	/**
	 * component property description
	 */
	description?: string
	/**
	 * component property type
	 */
	type: string
	/**
	 * component property default value
	 */
	defaultValue?: string
	/**
	 * property whether required
	 */
	required?: boolean
}

export type IApiDefinition = Record<string, ApiProp[]>

export default function Parser(filePath: string) {
	let definitions: IApiDefinition = cacher.get(filePath)

	if (!definitions) {
		definitions = {}
		parser
			.withCompilerOptions(
				{ esModuleInterop: true, jsx: 'preserve' as any },
				{
					savePropValueAsString: true,
					shouldExtractLiteralValuesFromEnum: true,
					shouldRemoveUndefinedFromOptional: true,
				}
			)
			.parse(filePath)
			.forEach((item) => {
				// convert result to IApiDefinition
				const exportName = item.displayName
				const props = Object.entries(item.props).map(([identifier, prop]) => {
					const result = { identifier } as ApiProp
					const fields = ['description', 'type', 'defaultValue', 'required']

					fields.forEach((field) => {
						switch (field) {
							case 'type':
								result.type = prop.type.raw || prop.type.name
								break

							case 'description':
								if (prop.description) {
									result.description = prop.description
								}
								break

							case 'defaultValue':
								if (prop[field]) {
									result.defaultValue = prop[field].value
								}
								break

							case 'required':
								if (prop[field]) {
									result.required = prop[field]
								}
								break
						}
					})

					return result
				})

				definitions[exportName] = props
			})
	}

	cacher.add(filePath, definitions)

	return definitions
}

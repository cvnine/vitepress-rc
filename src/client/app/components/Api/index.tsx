import React, { FC } from 'react'
import { WrapTable } from './style'

interface APIProps {
	export?: string
	identifier: string
	src?: string
}

type RenderMap = {
	identifier: string
	type: string
	description?: string
	default?: string
	required?: string
}[]

const TEXT = {
	name: '属性名',
	description: '描述',
	type: '类型',
	default: '默认值',
	required: '(必选)',
}

export const API: FC<APIProps> = ({ export: expt, identifier }) => {
	const renderMap = getRenderMap(expt, identifier)

	return (
		renderMap && (
			<WrapTable>
				<thead>
					<tr>
						<th>{TEXT.name}</th>
						<th>{TEXT.description}</th>
						<th>{TEXT.type}</th>
						<th>{TEXT.default}</th>
					</tr>
				</thead>
				<tbody>
					{renderMap.map((row) => (
						<tr key={row.identifier}>
							<td>{row.identifier}</td>
							<td>{row.description || '--'}</td>
							<td>
								<code>{row.type}</code>
							</td>
							<td>
								<code>{row.default || (row.required && TEXT.required) || '--'}</code>
							</td>
						</tr>
					))}
				</tbody>
			</WrapTable>
		)
	)
}

function getRenderMap(expt: APIProps['export'] = 'default', identifier: APIProps['identifier']): RenderMap | null {
	if (!identifier) return null

	let identifierMap = null
	try {
		identifierMap = JSON.parse(identifier ?? '{}')
	} catch (err) {}

	let result = identifierMap[expt]
	if (!result) {
		for (const key in identifierMap) {
			result = identifierMap[key]
			break
		}
	}

	return result
}
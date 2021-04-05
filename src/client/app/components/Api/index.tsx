import React, { FC } from 'react'
import { Wrap } from './style'

export const API: FC = (props: any) => {
	console.log('props :>> ', props)
	console.log('props :>> ', JSON.parse(props?.identifier.replace(/'/g, '"') ?? '{}'))
	return <Wrap></Wrap>
}

import React, { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Wrap } from './style'

const components = {}

export const Content: FC = (props) => {
	return (
		<Wrap>
			<MDXProvider components={components}>{props.children}</MDXProvider>
		</Wrap>
	)
}

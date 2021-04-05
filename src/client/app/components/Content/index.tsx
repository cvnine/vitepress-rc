import React, { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Wrap } from './style'
import { API } from 'vitepress-rc'

export const Content: FC = (props) => {
	return (
		<Wrap>
			<MDXProvider
				components={{
					API: API,
				}}
			>
				{props.children}
			</MDXProvider>
		</Wrap>
	)
}

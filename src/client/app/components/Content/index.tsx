import React, { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Wrap } from './style'
import { API, CodeBlock } from 'vitepress-rc'

export const Content: FC = (props) => {
	return (
		<Wrap>
			<MDXProvider
				components={{
					API: API,
					pre: (props: any) => <div {...props} />,
					code: CodeBlock,
				}}
			>
				{props.children}
			</MDXProvider>
		</Wrap>
	)
}

import React, { FC } from 'react'
import { Language } from 'prism-react-renderer'
import { CodeView } from './CodeView'
// import { CodePreviewer } from './CodePreviewer'

interface CodeBlockProps {
	className?: string
	live?: string
	children: string
}

const RE = /^language-([^{]*)({([\d,-]+)})*/

function parseClassName(className?: string) {
	if (className) {
		const result = RE.exec(className) ?? [null, 'js', null]

		const lineNumbers = result[3]?.split(',').map((x) => x.split('-').map((n) => parseInt(n, 10))) ?? []

		return [result[1], lineNumbers] as [Language, number[][]]
	}

	return (['js', []] as unknown) as [Language, number[][]]
}

export const CodeBlock: FC<CodeBlockProps> = ({ children, className, live, ...res }) => {
	const code = children.replace(/\n$/, '')

	const [language, lineNumbers] = parseClassName(className)

	// if (live) {
	// 	return (
	// 		<Wrap>
	// 			<LiveProvider code={children} scope={{ mdx }}>
	// 				<LivePreview />
	// 				<LiveEditor />
	// 				<LiveError />
	// 			</LiveProvider>
	// 		</Wrap>
	// 	)
	// }

	// if (live && (language === 'jsx' || language === 'tsx')) {
	// 	return <CodePreviewer code={code} />
	// }

	return <CodeView code={code} language={language} lineNumbers={lineNumbers} />
}

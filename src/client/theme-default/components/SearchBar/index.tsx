import React, { useRef, useState } from 'react'
import { AnchorLink } from '../Link'
import useSearch from './hooks'
import { Wrap } from './style'

export default function SearchBar() {
	const [keywords, setKeywords] = useState<string>('')
	const input = useRef<HTMLInputElement>(null)
	const result = useSearch(keywords)

	return (
		<Wrap>
			<input
				type="search"
				ref={input}
				{...(Array.isArray(result) ? { value: keywords, onChange: (ev) => setKeywords(ev.target.value) } : {})}
			/>
			<ul>
				{result.map((meta) => (
					<li key={meta.path} onClick={() => setKeywords('')}>
						<AnchorLink to={meta.path}>
							{meta.parent?.title && <span>{meta.parent.title}</span>}
							{meta.title}
						</AnchorLink>
					</li>
				))}
			</ul>
		</Wrap>
	)
}

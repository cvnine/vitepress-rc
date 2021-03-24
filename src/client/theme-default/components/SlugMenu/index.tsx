import React, { FC } from 'react'
import { WrapUl } from './style'
import { AnchorLink } from '../Link'
import { ISlugItem } from '@/route'

export default function SlugMenu({ slugs, className }: { slugs: ISlugItem[]; className?: string }) {
	return (
		<WrapUl className={className}>
			{slugs
				.filter(({ depth }) => depth > 1 && depth < 4)
				.map((slug) => (
					<li key={slug.heading} title={slug.value} data-depth={slug.depth}>
						<AnchorLink to={`#${slug.heading}`}>
							<span>{slug.value}</span>
						</AnchorLink>
					</li>
				))}
		</WrapUl>
	)
}

import React from 'react'
import { WrapUl } from './style'
import type { FlatSidebar } from '../../hooks/useSidebar'

export default function SlugMenu({ slugs, className }: { slugs: FlatSidebar[]; className?: string }) {
	return (
		<WrapUl className={className}>
			{slugs.map((child) => {
				return (
					<li className="slug-li" data-slug-level={child.level} key={child.text}>
						{child.link ? (
							<a href={child.link} className={`${child.isActive ? 'active' : ''}`}>
								{child.text}
							</a>
						) : (
							<span>{child.text}</span>
						)}
					</li>
				)
			})}
		</WrapUl>
	)
}

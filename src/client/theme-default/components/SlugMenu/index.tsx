import React from 'react'
import { WrapUl } from './style'
import type { FlatSidebar } from '../../hooks/useSidebar'
import { useActiveSlug } from '../../hooks/useActiveSlug'

export default function SlugMenu({ slugs, className }: { slugs: Omit<FlatSidebar, 'isActive'>[]; className?: string }) {
	const [activeHash, setActiveHash] = useActiveSlug()

	return (
		<WrapUl className={className}>
			{slugs.map((child) => {
				return (
					<li
						className="slug-li"
						data-slug-level={child.level}
						key={child.text}
						onClick={() => child.link && setActiveHash(child.link)}
					>
						{child.link ? (
							<a href={child.link} className={`${child.link === activeHash ? 'active' : ''}`}>
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

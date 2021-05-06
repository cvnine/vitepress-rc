import { useContext } from 'react'
import { Wrap } from './style'
import { ArrowLeft, ArrowRight, OutboundLink } from '../Icons'
import { Context, useSideData } from 'vitepress-rc'
import { useEditLink } from '../../hooks/useEditLink'
import { useNextPrevLink } from '../../hooks/useNextPrevLink'
import { resolveLink } from '../../utils'
import type { DefaultTheme } from '@vitepress-rc/types'

function getDate(time: number) {
	let now = new Date(time),
		y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate()
	return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + now.toTimeString().substr(0, 8)
}

function getLastUpdatedText(themeConfig: DefaultTheme.Config) {
	const p = themeConfig.lastUpdated
	return p === true || p === undefined ? 'Last Updated' : p
}

export default function ContentFooter() {
	const { themeConfig, base } = useSideData()
	const route = useContext(Context)
	const { url, text } = useEditLink()
	const { next, prev, hasLinks } = useNextPrevLink()

	const time = getDate(route.data.lastUpdated)
	let lastUpdatedText = getLastUpdatedText(themeConfig)

	return (
		<Wrap>
			<div className="page-footer">
				<div className="page-footer-edit">
					{url && (
						<>
							<a target="_blank" rel="noopener noreferrer" href={url}>
								{text}
							</a>
							<OutboundLink />
						</>
					)}
				</div>
				<div className="last-updated">
					{lastUpdatedText && (
						<>
							<span>{lastUpdatedText}：</span>
							{time}
						</>
					)}
				</div>
			</div>
			{hasLinks && (
				<div className="page-next-prev-link">
					{prev ? (
						<div>
							<ArrowLeft />
							<a href={resolveLink(base, prev.link)}>{prev.text}</a>
						</div>
					) : (
						<i></i>
					)}
					{next ? (
						<div>
							<a href={resolveLink(base, next.link)}>{next.text}</a>
							<ArrowRight />
						</div>
					) : (
						<i></i>
					)}
				</div>
			)}
		</Wrap>
	)
}

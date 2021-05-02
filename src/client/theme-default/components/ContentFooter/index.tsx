import { useContext } from 'react'
import { Wrap } from './style'
import { Context } from 'vitepress-rc'

function getDate(time: number) {
	let now = new Date(time),
		y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate()
	return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + now.toTimeString().substr(0, 8)
}

export default function ContentFooter() {
	const route = useContext(Context)
	const time = getDate(route.data.lastUpdated)
	return (
		<Wrap>
			<div></div>
			<div className="last-updated">
				<span>最后更新时间：</span>
				{time}
			</div>
		</Wrap>
	)
}

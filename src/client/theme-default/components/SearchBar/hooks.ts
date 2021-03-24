import { useContext, useEffect, useState } from 'react'
import context from '@/context'

export interface ISearchMetaItem {
	title: string
	path: string
	parent?: ISearchMetaItem
}

/**
 * hooks for get search result by keywords (builtin search feature)
 * @param keywords  search keywords
 */
export default function useSearch(keywords: string) {
	const { routes } = useContext(context)
	const [metas, setMetas] = useState<ISearchMetaItem[]>([])
	const [items, setItems] = useState<ISearchMetaItem[]>([])

	useEffect(() => {
		setMetas(
			routes.reduce((result, route) => {
				const routeMetaItem: ISearchMetaItem = {
					title: route.title ?? '',
					path: route.path,
				}

				if (route.meta?.group) {
					routeMetaItem.parent = route.meta.group
				}

				result.push(routeMetaItem)
				result.push(
					...(route.meta?.slugs || [])
						.filter(({ value }) => value !== route.title)
						.map((slug) => ({
							title: slug.value,
							path: `${route.path}#${slug.heading}`,
							parent: routeMetaItem,
						}))
				)

				return result
			}, [] as ISearchMetaItem[])
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [routes.length])

	useEffect(() => {
		const val = keywords?.trim().toUpperCase()

		if (val) {
			const result = []

			// at least find 5 results
			for (let i = 0; i < metas.length && result.length < 6; i += 1) {
				if (metas[i].title.toUpperCase().indexOf(val) > -1) {
					result.push(metas[i])
				}
			}

			setItems(result)
		} else {
			setItems([])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keywords, metas.length])

	return items
}

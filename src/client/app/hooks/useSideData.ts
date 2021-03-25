import serialized from '@virtual-module/siteData'
import React, { useEffect, useState } from 'react'
import { SiteData } from '@types'

export const useSideData = () => {
	const [siteData, setSiteData] = useState<SiteData>(JSON.parse(serialized))
	useEffect(() => {
		if (import.meta.hot) {
			import.meta.hot!.accept('@virtual-module/siteData', (val) => {
				setSiteData(JSON.parse(val))
			})
		}
	}, [])

	return siteData
}

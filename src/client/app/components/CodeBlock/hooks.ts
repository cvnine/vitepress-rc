import React, { useCallback, useState } from 'react'
// import copyToClipboard from 'copy-text-to-clipboard'

export const useCopy = () => {
	const [timer, setTimer] = useState<NodeJS.Timeout>()
	const [status, setStatus] = useState<'ready' | 'copied'>('ready')
	const handler = useCallback((text: string) => {
		// copyToClipboard(text)
		// setStatus('copied')
		// clearTimeout((timer as unknown) as number)
		// setTimer(
		// 	setTimeout(() => {
		// 		setStatus('ready')
		// 	}, 2000)
		// )
	}, [])

	return [handler, status] as const
}

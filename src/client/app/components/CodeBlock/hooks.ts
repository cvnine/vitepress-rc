import { useCallback, useState } from 'react'

import copyTextToClipboard from 'copy-text-to-clipboard'

export const useCopy = () => {
	const [timer, setTimer] = useState<NodeJS.Timeout>()
	const [status, setStatus] = useState<'ready' | 'copied'>('ready')
	const handler = useCallback((text: string) => {
		copyTextToClipboard(text)
		setStatus('copied')
		clearTimeout(timer as unknown as number)
		setTimer(
			setTimeout(() => {
				setStatus('ready')
			}, 2000)
		)
	}, [])

	return [handler, status] as const
}

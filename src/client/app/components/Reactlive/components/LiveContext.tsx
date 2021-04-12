import { createContext } from 'react'

export interface IContext {
	code: string
	disabled: boolean
	error: string | null
	domRef: React.RefObject<HTMLDivElement> | null
	onChange: (code: string) => void
}

const LiveContext = createContext<IContext>({
	code: '',
	disabled: false,
	error: '',
	domRef: null,
	onChange: () => {},
})

export default LiveContext

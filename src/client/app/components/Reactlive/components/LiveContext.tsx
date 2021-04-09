import { createContext } from 'react'

export interface IContext {
	code: string
	disabled: boolean
	error: string | null
	element: React.ComponentType | null
	onChange: (code: string) => void
}

const LiveContext = createContext<IContext>({
	code: '',
	disabled: false,
	error: '',
	element: null,
	onChange: () => {},
})

export default LiveContext

import { createContext } from 'react'

export interface IContext {
	code: string
	disabled: boolean
	error: string | null
	shadowRoot?: React.MutableRefObject<ShadowRoot | null>
	onChange: (code: string) => void
}

const LiveContext = createContext<IContext>({
	code: '',
	disabled: false,
	error: '',
	onChange: () => {},
})

export default LiveContext

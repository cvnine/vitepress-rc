import { createContext } from 'react'

export interface IContext {
	code: string
	disabled: boolean
	error: string | null
	shadowDom: boolean
	shadowRoot?: React.MutableRefObject<ShadowRoot | HTMLDivElement | null>
	onChange: (code: string) => void
}

const LiveContext = createContext<IContext>({
	code: '',
	disabled: false,
	shadowDom: false,
	error: '',
	onChange: () => {},
})

export default LiveContext

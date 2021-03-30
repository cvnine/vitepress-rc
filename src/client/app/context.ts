import { createContext } from 'react'
import { Route } from './hooks/useRoute'

const Context = createContext<Route>({
	path: '/',
	component: null,
	data: null as any,
})

export default Context

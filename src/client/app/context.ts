import { Route } from '@types'
import { createContext } from 'react'

const Context = createContext<Route>({
	path: '/',
	component: null,
	data: null as any,
})

export default Context

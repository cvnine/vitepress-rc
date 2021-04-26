import { createContext } from 'react'
import type { Route } from '@types'

const Context = createContext<Route>({
	path: '/',
	component: null,
	data: null as any,
})

export default Context

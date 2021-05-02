import { createContext } from 'react'
import type { Route } from '@vitepress-rc/types'

const Context = createContext<Route>({
	path: '/',
	component: null,
	data: null as any,
})

export default Context

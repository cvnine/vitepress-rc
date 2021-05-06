import { createContext } from 'react';
const Context = createContext({
    path: '/',
    component: null,
    data: null,
});
export default Context;

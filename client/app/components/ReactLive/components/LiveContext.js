import { createContext } from 'react';
const LiveContext = createContext({
    code: '',
    disabled: false,
    error: '',
    onChange: () => { },
});
export default LiveContext;

import { useCallback, useState } from 'react';
import copyTextToClipboard from 'copy-text-to-clipboard';
export const useCopy = () => {
    const [timer, setTimer] = useState();
    const [status, setStatus] = useState('ready');
    const handler = useCallback((text) => {
        copyTextToClipboard(text);
        setStatus('copied');
        clearTimeout(timer);
        setTimer(setTimeout(() => {
            setStatus('ready');
        }, 2000));
    }, []);
    return [handler, status];
};

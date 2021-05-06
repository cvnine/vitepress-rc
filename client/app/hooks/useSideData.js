import serialized from '@virtual-module/siteData';
import { useEffect, useState } from 'react';
export function useSideData() {
    const [siteData, setSiteData] = useState(JSON.parse(serialized));
    useEffect(() => {
        if (import.meta.hot) {
            import.meta.hot.accept('@virtual-module/siteData', (val) => {
                setSiteData(JSON.parse(val));
            });
        }
    }, []);
    return siteData;
}

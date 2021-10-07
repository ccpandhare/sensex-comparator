import sensex from '../blobs/bse';
import {useMemo} from 'react';

export default function useSensexData() {
    return useMemo(() => {
        try {
            return sensex.map(dataPoint => ({
                date: formatDate(dataPoint.Month),
                close: dataPoint.Close,
            }))
        } catch (e) {
            console.error(e);
            throw new Error('Invalid sensex data in JSON');
        }
    }, []);
}

function formatDate(d) {
    const mmyy = new Date(d);
    return new Date(mmyy.getFullYear(), mmyy.getMonth()+1, 0);
}
import {useAPIKey} from '../recoil/hooks';
import {useCallback} from 'react';

const BASE_URI = 'https://www.alphavantage.co/query?';
const FUNCTION = 'TIME_SERIES_MONTHLY';

export default function useFetchStockData() {
    const apiKey = useAPIKey();
    return useCallback((stock) => {
        const ticker = `${stock}.BO`.toUpperCase();
        const url = BASE_URI + new URLSearchParams({
            function: FUNCTION,
            symbol: ticker,
            apikey: apiKey,
        });
        return fetch(url, {})
            .then(response => response.json())
            .then(parseResponse);
    }, [apiKey]);
}

function parseResponse(response) {
    const series = response['Monthly Time Series'];
    if (!series) {
        throw(new Error(`Invalid Response - ${JSON.stringify(response)}`))
    }
    return Object.keys(series).map(k => ({date: new Date(k), close: series[k]['4. close']}));
}
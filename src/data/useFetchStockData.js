import {useAPIKey} from '../recoil/hooks';

const BASE_URI = 'https://www.alphavantage.co/query?';
const FUNCTION = 'TIME_SERIES_MONTHLY';

export default function useFetchStockData() {
    const apiKey = useAPIKey();
    return (stock) => {
        const ticker = `${stock}.BO`.toUpperCase();
        const url = BASE_URI + new URLSearchParams({
            function: FUNCTION,
            symbol: ticker,
            apikey: apiKey,
        });
        return fetch(url, {}).then(response => response.json());
    }
}
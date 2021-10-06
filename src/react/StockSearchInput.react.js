import {TextInput, Button, Pane} from 'evergreen-ui';
import {useState} from 'react';
import useFetchStockData from '../data/useFetchStockData';
import {useSetStockData} from '../recoil/hooks';

export default function StockSearchInput() {
    const [q, setQ] = useState('');
    const [error, setError] = useState(null);
    const fetchStockData = useFetchStockData();
    const setStockData = useSetStockData();
    const handleChange = e => {
        const value = e.target.value;
        setQ(value);
    }
    const handleClick = () => {
        setError(false);
        fetchStockData(q).then(json => {
            setStockData(parseResponse(json));
        }).catch(e => {
            setError(e.toString());
        });
    }
    return (
        <Pane width="100%" paddingTop={8} paddingBottom={8} display="flex" flexDirection="column" alignItems="flex-end">
            <TextInput value={q} onChange={handleChange} placeholder="Example: HDFCBANK" width="100%" />
            <Button marginTop={4} appearance="primary" onClick={handleClick}>Submit</Button>
            {error && <p>Error: {error}</p>}
        </Pane>
    );
}

function parseResponse(response) {
    const series = response['Monthly Time Series'];
    if (!series) {
        throw(new Error(`Invalid Response - ${JSON.stringify(response)}`))
    }
    return Object.keys(series).map(k => ({date: new Date(k), close: series[k]['4. close']}));
}
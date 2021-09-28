import {TextInput, Button, Pane} from 'evergreen-ui';
import {useState} from 'react';
import useFetchStockData from '../data/useFetchStockData';

export default function StockSearchInput() {
    const [q, setQ] = useState('');
    const fetchStockData = useFetchStockData();
    const handleChange = e => {
        const value = e.target.value;
        setQ(value);
    }
    const handleClick = () => {
        fetchStockData(q).then(console.log);
    }
    return (
        <Pane width="100%" paddingTop={8} paddingBottom={8} display="flex" flexDirection="column" alignItems="flex-end">
            <TextInput value={q} onChange={handleChange} placeholder="Example: HDFCBANK" width="100%" />
            <Button marginTop={4} appearance="primary" onClick={handleClick}>Submit</Button>
        </Pane>
    );
}
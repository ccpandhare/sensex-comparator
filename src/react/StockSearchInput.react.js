import {TextInput, Button, Pane} from 'evergreen-ui';
import {useState} from 'react';
import {useSetStockQuery} from '../recoil/hooks';

export default function StockSearchInput(props) {
    const [q, setQ] = useState('');
    const setStockQuery = useSetStockQuery();
    const handleChange = e => {
        const value = e.target.value;
        setQ(value);
    }
    return (
        <Pane width="100%" paddingTop={8} paddingBottom={8} display="flex" flexDirection="column" alignItems="flex-end">
            <TextInput value={q} onChange={handleChange} placeholder="Example: HDFCBANK" width="100%" />
            <Button marginTop={4} appearance="primary" onClick={() => setStockQuery(q)}>Submit</Button>
        </Pane>
    );
}
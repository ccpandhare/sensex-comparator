import {useEffect, useState, useMemo} from 'react';
import useSensexData from './useSensexData';
import useFetchStockData from './useFetchStockData';
import {useStockQuery, useSetData} from '../recoil/hooks';

export default function useNormalisedData() {
    const stock = useStockQuery();
    const setData = useSetData();
    
    const fetchStockData = useFetchStockData();
    const sensex = useSensexData();

    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        if (stock == null) {
            return;
        }
        fetchStockData(stock).then(setStockData);
    }, [fetchStockData, stock]);

    return useMemo(() => {
        if (sensex == null || stockData == null) {
            console.log('Nothing to calculate one of sensex or stock is null');
            return null;
        }
        const firstSensexDate = sensex.map(s => s.date).reduce(minimumReducer);
        const firstStockDate = stockData.map(s => s.date).reduce(minimumReducer);
        const cutOffDate = Math.max(firstSensexDate, firstStockDate);

        const cutOffSensex = sensex.filter(dateFilter(cutOffDate));
        const cutOffStock = stockData.filter(dateFilter(cutOffDate));

        setData({
            sensex: cutOffSensex,
            stock: cutOffStock,
        });
    }, [sensex, setData, stockData]);
}

function minimumReducer(p, c) {
    return Math.min(p, c);
}

function dateFilter(cutOffDate) {
    return stock => stock.date >= cutOffDate
}

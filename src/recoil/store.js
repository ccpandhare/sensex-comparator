import {atom} from 'recoil';

export const APIKeyAtom = atom({
    key: 'Store.APIKey',
    default: localStorage.getItem('APIKey') ?? null,
});

export const StockDataAtom = atom({
    key: 'Store.StockData',
    default: null,
})
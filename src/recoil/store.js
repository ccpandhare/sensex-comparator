import {atom} from 'recoil';

export const APIKeyAtom = atom({
    key: 'Store.APIKey',
    default: localStorage.getItem('APIKey') ?? null,
});

export const DataAtom = atom({
    key: 'Store.Data',
    default: null,
});

export const StockQueryAtom = atom({
    key: 'Store.StockQuery',
    default: null,
});
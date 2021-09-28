import * as store from './store';
import {useRecoilValue, useSetRecoilState} from 'recoil';

export const useAPIKey = () => useRecoilValue(store.APIKeyAtom);
export const useSetAPIKey = () => {
    const setAPIKey = useSetRecoilState(store.APIKeyAtom);
    return (apiKey) => {
        try {
            setAPIKey(apiKey);
            localStorage.setItem('APIKey', apiKey);
        } catch {
            // ignore
        }
    }
}
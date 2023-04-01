import { useLocalStorage } from './useLocalStorage';

function useToken() {
    const { setItem, getItem, removeItem } = useLocalStorage();

    const setToken = (token) => {
        setItem('token', token);
    }

    const removeToken = () => {
        removeItem('token');
    }

    const getToken = () => {
        const token = getItem('token')
        return token;
    }

    return {
        setToken,
        removeToken,
        getToken
    }
}

export { useToken };
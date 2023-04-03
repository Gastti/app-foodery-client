import { API_URL } from './config';
import { useToken } from '../hooks/useToken';

const fetchUser = async (token) => {
    try {
        const { removeToken } = useToken();
        const response = await fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.status === 401) {
            console.log('Error en fetchUser 401, token removed from local storage.');
            removeToken();
            return null;
        }

        if (!response.ok) {
            console.log('Error in fetchUser, user.js');
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('ERROR IN FETCHUSER FUNCTION', error);
        return null;
    }
}

export {
    fetchUser
}
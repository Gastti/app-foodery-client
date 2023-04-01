import { API_URL } from './config';
import { useToken } from '../hooks/useToken';

const loadUser = async (token, cb) => {
    const { removeToken } = useToken();

    if (token) {
        fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(`HTTP error! status: ${response.status}`);

            })
            .then(data => {
                cb(data.data)
                console.log(data.data);
            })
            .catch(error => {
                if (error.message.includes('401')) {
                    removeToken();
                }
            })
    }
}

const fetchUser = async (token) => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });

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
    loadUser,
    fetchUser
}
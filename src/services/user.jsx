import { API_URL } from './config';
import useToken from '../hooks/useToken';

const loadUser = async (token, cb) => {
    const { removeTokenFromLocalStorage } = useToken();

    if (token) {
        fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(`HTTP error! status: ${response.status}`);

            })
            .then(data => cb(data.data))
            .catch(error => {
                if (error.message.includes('401')) {
                    removeTokenFromLocalStorage();
                }
            })
    }
}

export {
    loadUser
}
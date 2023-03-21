import { API_URL } from './config';

const loadUser = async (token, cb) => {
    if (token) {
        fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(data => data.json())
            .then(data => cb(data.data))
    }
}

export {
    loadUser
}
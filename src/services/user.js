import { API_URL } from './config';

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
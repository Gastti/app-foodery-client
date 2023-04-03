import { API_URL } from './config';

const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            console.log('Error in login, auth-w.js');
            return null;
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const register = async (first_name, last_name, username, email, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ first_name, last_name, username, email, password })
        });

        if (!response.ok) {
            console.log('Error in register, auth-w.js');
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { login, register }
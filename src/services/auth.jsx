import React from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const {
        setTokenOnLocalStorage,
        removeTokenFromLocalStorage,
        getTokenFromLocalStorage
    } = useToken();

    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const localToken = getTokenFromLocalStorage();
        const loadUser = async () => {
            if (localToken) {
                fetch('http://localhost:5000/users/me', {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${localToken}` }
                })
                    .then(data => data.json())
                    .then(data => setUser(data.data))
            }
        }
        loadUser();
    }, [])

    const signin = async (email, password) => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                setLoading(false);
                setError(true);
                return null;
            }

            const { data } = await response.json();
            const loggedUser = await getUser(data.token);

            setUser(loggedUser);
            setTokenOnLocalStorage(data.token);
            setLoading(false);
            navigate('/welcome');
        } catch (error) {
            console.error(error);
        }
    }

    const signup = async (first_name, last_name, username, email, password) => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ first_name, last_name, username, email, password })
            });

            if (!response.ok) {
                setLoading(false);
                setError(true);
                console.log('Error al registrarse');
            }

            const data = await response.json();
            setLoading(false);
            setError(false);
            console.log(data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        try {
            removeTokenFromLocalStorage();
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async (token) => {
        const response = await fetch('http://localhost:5000/users/me', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })

        if (!response.ok) {
            throw new Error('Error al obtener el usuario.');
        }

        const { data } = await response.json();
        return data;
    }

    const auth = { user, setUser, signin, signup, logout, error, loading };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

export {
    AuthProvider,
    useAuth
};
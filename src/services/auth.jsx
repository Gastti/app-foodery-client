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
    const [token, setToken] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const localToken = getTokenFromLocalStorage();

        const fetchData = async () => {
            if (localToken) {
                try {
                    const { data } = await getUser(localToken);
                    setToken(localToken);
                    setUser(data);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        fetchData();
    }, [token]);

    const login = async (username, password) => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                setLoading(false);
                throw new Error('Error al iniciar sesión.');
            }

            const { data } = await response.json();

            setTokenOnLocalStorage(data.token);
            setLoading(false)
            navigate('/welcome');

        } catch (error) {
            console.error(error);
        }
    }

    const logout = () => {
        try {
            removeTokenFromLocalStorage();
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async (localToken) => {
        const response = await fetch('http://localhost:5000/users/me', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${localToken}` }
        })

        if (!response.ok) {
            throw new Error('Error al obtener el usuario.');
        }

        const data = await response.json();
        return data;
    }

    const auth = { user, token, login, logout };

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
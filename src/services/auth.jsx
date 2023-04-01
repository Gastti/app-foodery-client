import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import { API_URL } from './config';
import { loadUser } from './user';

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
    const [token, setToken] = React.useState('');

    React.useEffect(() => {
        const localToken = getTokenFromLocalStorage();
        loadUser(localToken, setUser);
        setToken(localToken);
    }, [loading])

    const signin = async (email, password) => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/auth/login`, {
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

            setTokenOnLocalStorage(data.token);
            setLoading(false);
            setError(false);
            setTimeout(() => {
                navigate('/welcome');
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }

    const signup = async (first_name, last_name, username, email, password) => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/auth/register`, {
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

    const auth = { user, token, signin, signup, logout, error, loading };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function AuthRoute(props) {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/auth" />
    }

    return props.children;
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

export {
    AuthProvider,
    AuthRoute,
    useAuth
};
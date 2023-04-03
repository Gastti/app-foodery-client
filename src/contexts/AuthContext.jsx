import React, { useState, useEffect } from 'react';
import { fetchUser } from '../services/user';
import { login } from '../services/auth';
import { useToken } from '../hooks/useToken';
import { fetchCart } from '../services/cart';
import { useConfig } from './ConfigContext';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const { setToken, getToken, removeToken } = useToken();
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState({ items: [], total: 0 })
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = getToken();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { isCartOpen } = useConfig();
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const user = await fetchUser(token);

            if (user) {
                setUser(user.data);
                setIsLoggedIn(true)
            }
        }

        if (token) {
            getUser();
        }
    }, [token]);

    useEffect(() => {
        const getCart = async () => {
            try {
                const data = await fetchCart(token);
                if (data) {
                    setCart({ items: data.cart_items, total: data.total });
                    error ? setError(false) : null;
                }
            } catch (error) {
                setError(true);
                console.log('AuthContext: ', error);
            }
        }
        getCart();
    }, [isCartOpen])

    const handleLogin = async (email, password) => {
        try {
            setLoading(true);
            const user = await login(email, password);
            setToken(user.token);
            navigate('/welcome');
            setLoading(false);
        } catch (error) {
            console.log('Error en signin useAuth.js');
            setLoading(false);
            return null
        }
    }

    const handleLogout = async () => {
        try {
            setUser(null);
            removeToken();
        } catch (error) {
            console.log('AuthContext[handleLogout]: ', error);
        }
    }

    const value = {
        user,
        cart,
        token,
        isLoggedIn,
        loading,
        error,
        login: handleLogin,
        logout: handleLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
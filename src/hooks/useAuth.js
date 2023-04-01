import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function useAuth() {
    const { user, cart, token, isLoggedIn, login, logout, loading, error } = useContext(AuthContext);

    return {
        user,
        cart,
        token,
        isLoggedIn,
        login,
        logout,
        loading,
        error
    }
}

export { useAuth }
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

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

function AuthRoute(props) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth" />
    }

    return props.children;
}

export { useAuth, AuthRoute }
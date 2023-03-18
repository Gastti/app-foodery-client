import React from 'react'

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

    const loginWithUsername = async (username, password) => {
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            setUser({
                username,
                token: data.data.token
            })
        } catch (error) {
            console.error(error);
        }
    }

    const auth = { user, loginWithUsername };

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
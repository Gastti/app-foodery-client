import React from 'react'

export default function useToken() {
    const setTokenOnLocalStorage = (token) => {
        localStorage.setItem('token', token);
    }

    const removeTokenFromLocalStorage = () => {
        localStorage.removeItem('token');
    }

    const getTokenFromLocalStorage = () => {
        return localStorage.getItem('token') || ''
    }

    return {
        setTokenOnLocalStorage,
        removeTokenFromLocalStorage,
        getTokenFromLocalStorage
    }
}

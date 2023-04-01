import React, { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { size } from '../config/devices';

const ConfigContext = createContext();

function ConfigProvider({ children }) {
    const isMobile = useMediaQuery({ maxWidth: size.mobile });
    const isTablet = useMediaQuery({ maxWidth: size.tablet });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [language, setLanguage] = useState('')

    useEffect(() => {
        setLanguage(navigator.language || 'en-US');
    }, [])

    const handleCartState = () => {
        setIsCartOpen(!isCartOpen);
    }

    const config = {
        isMobile,
        isTablet,
        language,
        isCartOpen,
        handleCartState
    }

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    )
}

function useConfig() {
    const config = React.useContext(ConfigContext);
    return config;
}

export {
    ConfigContext,
    ConfigProvider,
    useConfig
};
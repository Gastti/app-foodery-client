import React from 'react';
import Navigation from './Navigation';
import SearchBar from '../SearchBar';
import LocationUI from '../Location/LocationUI';
import { NavbarUI } from './NavbarUI';
import { useConfig } from '../../contexts/ConfigContext';

export default function Navbar({ user }) {
    const { isTablet, isMobile } = useConfig();
    return (
        <>
            <NavbarUI user={user}>
                {!isTablet &&
                    <div style={{ position: 'relative' }}>
                        <LocationUI />
                        <SearchBar />
                    </div>
                }
                <Navigation user={user} isMobile={isMobile} />
            </NavbarUI>
        </>
    );
}
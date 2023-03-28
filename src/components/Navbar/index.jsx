import React from 'react';
import Navigation from './Navigation';
import SearchBar from '../SearchBar';
import LocationUI from '../Location/LocationUI';
import { NavbarUI } from './NavbarUI';
import { useConfig } from '../../contexts/ConfigContext';

export default function Navbar() {
    const { isTablet, isMobile } = useConfig();
    return (
        <>
            <NavbarUI>
                {!isTablet &&
                    <div style={{ position: 'relative' }}>
                        <LocationUI />
                        <SearchBar />
                    </div>
                }
                <Navigation isMobile={isMobile} />
            </NavbarUI>
        </>
    );
}
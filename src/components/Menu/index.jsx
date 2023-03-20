import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import Button from '../Button';

export default function Menu() {
    const auth = useAuth();
    const routes = [
        { label: 'Browse', to: '/browse', private: false, publicOnly: false },
        { label: 'Order', to: '/order', private: false, publicOnly: false },
        { label: 'Delivery', to: '/delivery', private: false, publicOnly: false },
        { label: 'Login', to: '/auth/login', private: false, publicOnly: true }
    ];

    return (
        <StyledMenu>
            {routes.map((route) => {
                if (route.publicOnly && auth.user) return null;
                if (route.private && !auth.user) return null;
                if (route.label == 'Login') return (
                    <Button
                        key={route.to}
                        to={route.to}
                        color='primary'
                    >
                        {route.label}
                    </Button>
                )

                return <li key={route.to}><NavLink to={route.to}>{route.label}</NavLink></li>
            })}
            {auth.user && <Button onClick={auth.logout}>Logout</Button>}
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0;
    padding: 0;

    & > li > a {
        color: var(--c-font-normal)
    }

    & > li > a:hover {
        color: var(--c-primary)
        }
`
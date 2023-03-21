import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import Button from '../Button';
import Avatar from './Avatar';

export default function Navigation() {
    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        setIsLoggedIn(Boolean(auth.user))
    }, [auth.user])

    const routes = [
        { label: 'Browse', to: '/browse', private: false, publicOnly: false },
        { label: 'Order', to: '/order', private: false, publicOnly: false },
        { label: 'Delivery', to: '/delivery', private: false, publicOnly: false }
    ];

    const handleLogout = () => {
        auth.logout();
        setIsLoggedIn(false);
    }

    return (
        <StyledMenu>
            {routes.map((route) => {
                if (route.publicOnly && auth.user) return null;
                if (route.private && !auth.user) return null;

                return <li key={route.to}><NavLink to={route.to}>{route.label}</NavLink></li>
            })}
            {isLoggedIn && <Avatar image={auth.user.image} />}
            {isLoggedIn && <span>{auth.user.username}</span>}
            {isLoggedIn
                ? <Button to='/' onClick={handleLogout} color='primary'>Logout</Button>
                : <Button to='/auth' color='primary'>Sign In</Button>
            }
        </StyledMenu >
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
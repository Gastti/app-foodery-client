import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../services/auth';
import Button from '../Button';
import UserMenu from '../UserMenu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Navigation({ isMobile }) {
    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        setIsLoggedIn(Boolean(auth.user))
    }, [auth.user])

    const handleLogout = () => {
        auth.logout();
        setIsLoggedIn(false);
    }

    return (
        <StyledMenu>
            {routes.map((route) => {
                if (route.publicOnly && auth.user) return null;
                if (route.private && !auth.user) return null;
                if (route.mobileOnly && !isMobile) return null;

                return (
                    <li key={route.to}>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? 'var(--c-primary)' : '' })}
                            to={route.to}
                        >
                            {route.icon}
                        </NavLink>
                    </li>
                )
            })}
            {isLoggedIn && <UserMenu avatar={auth.user.image} name={auth.user.username} />}
            {(!isLoggedIn && !isMobile) && <Button to='/auth' color='primary'>Sign In</Button>}
        </StyledMenu >
    )
}

const routes = [
    {
        label: 'Search',
        icon: <SearchOutlinedIcon />,
        to: '/search',
        private: false,
        publicOnly: false,
        mobileOnly: true
    },
    {
        label: 'Cart',
        icon: <ShoppingCartOutlinedIcon />,
        to: '/cart',
        private: true,
        publicOnly: false,
        mobileOnly: false
    },
    {
        label: 'Profile',
        icon: <PersonOutlineOutlinedIcon />,
        to: '/profile',
        private: false,
        publicOnly: true,
        mobileOnly: true
    }
];

const StyledMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0;
    padding: 0;

    & > li > a {
        color: var(--c-font-normal);
        display: flex;
    }

    & > li > a:hover {
        color: var(--c-primary)
        }
`
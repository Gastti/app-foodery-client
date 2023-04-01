import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import Button from '../Button';
import UserMenu from '../UserMenu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useConfig } from '../../contexts/ConfigContext';

export default function Navigation({ user, isMobile }) {
    const { handleCartState } = useConfig();
    const { isLoggedIn } = useAuth();

    return (
        <StyledMenu>
            {isLoggedIn && <a className='cart-button' onClick={handleCartState}><ShoppingCartOutlinedIcon /></a>}
            {(!isLoggedIn && !isMobile) && <Button to='/auth' color='primary'>Sign In</Button>}
            {isLoggedIn && <UserMenu avatar={user?.image} name={user?.username} />}
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
        to: false,
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

    & > a.cart-button {
        color: var(--c-font-normal);
        display: flex;
        cursor: pointer;

        :hover {
            color: var(--c-primary)
        }
    }
`
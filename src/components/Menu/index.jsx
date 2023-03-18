import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { NavLink } from 'react-router-dom';

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

export default function Menu({ handleMenu }) {
    const navigation = [
        { label: 'Browse', to: '/browse' },
        { label: 'Order', to: '/order' },
        { label: 'Delivery', to: '/delivery' }
    ];

    return (
        <StyledMenu>
            {
                navigation.map((link) => {
                    return (
                        <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
                    );
                })
            }
            <Button primary>Sign Up</Button>
        </StyledMenu>
    )
}
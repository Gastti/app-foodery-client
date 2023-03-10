import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

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

export default function Menu() {
    const navigation = [
        { label: 'Browse', href: '/browse' },
        { label: 'Order', href: '/order' },
        { label: 'Delivery', href: '/delivery' }
    ];

    return (
        <StyledMenu>
            {
                navigation.map((link) => {
                    return (
                        <li key={link.href}><a href={link.href}>{link.label}</a></li>
                    );
                })
            }
            <Button primary>Sign Up</Button>
        </StyledMenu>
    )
}
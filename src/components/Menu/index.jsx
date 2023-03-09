import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
    margin-right: 30px;

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
        </StyledMenu>
    )
}
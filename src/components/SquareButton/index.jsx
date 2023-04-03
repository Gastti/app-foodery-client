import React from 'react';
import styled from 'styled-components';

export default function SquareButton({ icon, onClick, primary, size }) {
    return (
        <SquareButtonContainer
            onClick={onClick}
            primary={primary}
            size={size}
        >
            {icon}
        </SquareButtonContainer>
    )
}

const SquareButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 6px;
    border: none;
    transition: all .2s;
    background-color: ${props => props.primary ? 'var(--c-primary)' : 'transparent'};
    background: ${props => props.primary ? 'var(--g-primary)' : 'transparent'};
    cursor: pointer;

    & > svg{
        font-size: ${props => props.size ? props.size : '1.5rem'};
        color: ${props => props.primary ? '#fff' : 'var(--c-primary)'};
    }

    /* :hover {
        transform: scale(1.1);
        background: ${props => props.primary ? 'var(--g-primary-h)' : 'transparent'};
    } */

    :active {
        transform: scale(0.8);
    }
`
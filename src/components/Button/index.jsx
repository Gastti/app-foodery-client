import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.primary ? "var(--c-primary)" : "rgba(0, 0, 0, 0.1)"};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--c-ubuntu);
    font-weight: 500;
    padding: ${props => props.icon ? "0px" : "12px 30px"};
    transition: all .1s;
    width: ${props => props.icon ? "45px" : ""};
    height: ${props => props.icon ? "45px" : ""};
    justify-content: center;
    box-shadow: inset 5px 5px 15px #ffffff41;

    &:hover {
        background-color: ${props => props.primary ? "var(--c-primary-h)" : "#d1d1d1"};
    }
`;


export default function Button({ children, icon, primary, onClick, size }) {
    return (
        <StyledButton
            primary={primary}
            icon={icon}
            onClick={onClick}
            size={size}
        >
            {icon}
            {children}
        </StyledButton>
    )
}
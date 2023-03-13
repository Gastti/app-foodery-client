import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.primary ? "var(--c-primary)" : "#c6c6c6"};
    background: ${props => props.primary
        ? "var(--g-primary)"
        : "linear-gradient(90deg, #c6c6c6 20%, #dbdbdb 100%)"};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--c-ubuntu);
    font-weight: 500;
    padding: ${props => props.icon ? "0px" : "12px 30px"};
    transition: all .3s;
    width: ${props => props.icon ? "45px" : ""};
    height: ${props => props.icon ? "45px" : ""};
    justify-content: center;

    &:hover {
        background: ${props => props.primary
        ? "linear-gradient(90deg, rgba(255,107,0,1) 50%, #ff9100 100%)"
        : "linear-gradient(90deg, #c6c6c6 50%, #dbdbdb 100%)"};
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
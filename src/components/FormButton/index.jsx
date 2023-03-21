import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.color == 'primary' ? "var(--c-primary)" : "#c6c6c6"};
    background: ${props => props.color == 'primary'
        ? "var(--g-primary)"
        : "linear-gradient(90deg, #c6c6c6 20%, #dbdbdb 100%)"};
    color: #fff;
    border: none;
    border-radius: 7px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    font-size: ${props => props.size == 'lg' ? '1.3rem' : '1rem'};
    font-family: var(--c-ubuntu);
    font-weight: ${props => props.size == 'lg' ? '400' : '500'};
    padding: ${props => props.icon ? "0px" : "12px 30px"};
    transition: all .3s;
    width: ${props => props.icon ? "45px" : ""};
    height: ${props => props.icon ? "45px" : ""};
    justify-content: center;
    margin: ${props => props.align ? '0px auto' : ''};
    width: ${props => props.size == 'lg' ? '100%' : ''};
    opacity: ${props => props.disabled ? '0.7' : '1'};
    pointer-events: ${props => props.disabled ? 'none' : ''};;

    &:hover {
        color: #fff;
        background: ${props => props.color == 'primary'
        ? "linear-gradient(90deg, rgba(255,107,0,1) 50%, #ff9100 100%)"
        : "linear-gradient(90deg, #c6c6c6 50%, #dbdbdb 100%)"};
    }
`;


export default function Button({ children, icon, color, onClick, size, type, align, disabled }) {
    return (
        <StyledButton
            color={color}
            icon={icon}
            onClick={onClick}
            size={size}
            type={type}
            align={align}
            disabled={disabled}
        >
            {icon}
            {children}
        </StyledButton>
    )
}
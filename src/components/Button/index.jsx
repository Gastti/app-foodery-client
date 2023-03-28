import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    background-color: ${props => props.color == 'primary' ? "var(--c-primary)" : "#c6c6c6"};
    background: ${props => props.color == 'primary'
        ? "var(--g-primary)"
        : "linear-gradient(90deg, #c6c6c6 20%, #dbdbdb 100%)"};
    color: #fff;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    font-size: 1rem;
    font-family: var(--c-ubuntu);
    font-weight: 500;
    padding: ${props => props.icon ? "0px" : "12px 60px"};
    transition: all .3s;
    width: ${props => props.icon ? "45px" : ""};
    height: ${props => props.icon ? "45px" : ""};
    justify-content: center;

    &:hover {
        color: #fff;
        background: ${props => props.color == 'primary'
        ? "linear-gradient(90deg, rgba(255,107,0,1) 50%, #ff9100 100%)"
        : "linear-gradient(90deg, #c6c6c6 50%, #dbdbdb 100%)"};
    }
`;


export default function Button({ children, icon, color, onClick, size, to }) {
    return (
        <StyledNavLink
            color={color}
            icon={icon}
            onClick={onClick}
            size={size}
            to={to}
        >
            {icon}
            {children}
        </StyledNavLink>
    )
}
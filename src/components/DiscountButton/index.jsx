import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 235px;
    align-items: center;
    color: var(--c-primary);
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--f-ubuntu);
    background-color: #ffe0ca;
    padding: 5px;
    padding-left: 25px;
    border-radius: 7px;
    cursor: pointer;
    position: relative;

    &:hover > div {
        // Animation
    }

    &:hover > span {
        // Animation
    }

    & > svg {
        font-size: 2rem;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 7px;
        background-color: var(--c-primary);
        color: #fff;
    }
`;

export default function DiscountButton({ children }) {
    return (
        <Container>
            <span>{children}</span>
            <div>{<ArrowRightAltIcon fontSize="large" />}</div>
        </Container>
    )
}
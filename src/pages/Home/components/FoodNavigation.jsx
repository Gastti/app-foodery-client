import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    & > button:nth-child(2) > svg {
        margin-right: -4px;
    }
`;

const NavigationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.primary ? "var(--c-primary)" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#222222"};
    box-shadow: inset 5px 5px 15px #ffffff41, 0px 0px 15px #0000001f;
    border: none;
    border-radius: 10px;
    width: 55px;
    height: 55px;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export default function FoodNavigation({page, setPage, prevPage, nextPage }) {
    return (
        <Container>
            <NavigationButton onClick={() => prevPage(page, setPage)}>
                <ArrowBackIosNewIcon />
            </NavigationButton>
            <NavigationButton primary onClick={() => nextPage(page, setPage)}>
                <ArrowForwardIosIcon />
            </NavigationButton>
        </Container>
    )
}
import React from "react";
import styled from "styled-components";
import { devices } from "../../../config/devices";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${devices.tabletMax} {
        flex-direction: column;
    }
`;

export const FoodListContent = styled.ul`
    display: flex;
    flex-flow: column;
    max-height: 310px;

    @media ${devices.tabletMax} {
        flex-flow: row wrap;
        justify-content: space-evenly;
        gap: 20px;
        margin-bottom: 20px;
        max-height: none;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--c-primary-h);
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`;

export const FoodLi = styled.li`
    display: flex;
    align-items: center;
    background-color: ${props => props.active ? "var(--c-primary)" : "#ffffff20"};
    color: ${props => props.active ? "#fff" : "#222222"};
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 15px;
    padding: 10px;
    width: 340px;
    cursor: pointer;
    margin-right: 10px;
    box-shadow: inset 10px 10px 50px #ffffff41, 0px 0px 15px #00000015;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    @media (max-width: 1038px) {
        width: 240px;
        margin-right: 0px;
        margin-bottom: 0px;
    }

    @media ${devices.tabletMax} {
        width: 300px;
    }

    @media (max-width: 700px) {
        width: 200px;
    }

    @media ${devices.mobileMax} {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        padding: 0px;
    }

    @media (max-width: 420px) {
        width: 50px;
        height: 50px;
    }
`;

export const Icon = styled.div`
    background-color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 30px;
    padding: 5px;

    @media ${devices.mobileMax} {
        margin-right: 0px;
    }

    @media (max-width: 420px) {
        width: 40px;
        height: 40px;
    }

    & > img {
        width: 100%;
    }
`;

export const FoodProductsContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: calc(100% - 358px);

    @media (max-width: 1038px) {
        width: calc(100% - 250px);
        gap: 20px;
    }

    @media ${devices.tabletMax} {
        width: 100%;
        flex-flow: column wrap;
        justify-content: space;
        gap: 40px;
    }

    @media ${devices.mobileMax} {
        gap: 20px;
    }
`;
import React from "react";
import styled from "styled-components";
import { devices } from "../../../../config/devices";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    & > div {
        flex-basis: 0;
        flex-grow: 1;
        aspect-ratio: 1/1;
        box-sizing: border-box;
    }

    @media ${devices.tabletMax} {
        flex-direction: column;
        align-items: stretch;
        > div {
            aspect-ratio: auto;
        }
        
        > div:not(:first-child) {
            min-height: 207.67px;
        }
    }
`;

export const FoodListContent = styled.div`
    display: flex;
    flex-flow: column;
    gap: 10px;
    overflow-y: scroll;

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

    @media ${devices.tabletMax} {
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: visible;
        justify-content: space-between;
        gap: 10px;
    }
`;

export const FoodLi = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.active ? "var(--c-primary)" : "#f1f1f1;"};
    background: ${props => props.active ? "linear-gradient(90deg, rgba(255,107,0,1) 20%, #ff9100 100%)" : ""};
    color: ${props => props.active ? "#fff" : "#222222"};
    font-size: 1.3rem;
    font-weight: 400;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    flex-basis: 0;
    flex-grow: 1;
    gap: 20px;
    margin-right: 10px;

    @media ${devices.tabletMax} {
        margin-right: 0px;
        font-size: 1rem;
        font-weight: 500;
        margin-right: 0px;
    }

    @media (max-width: 631px){
        justify-content: center;
        & > span {
            display: none;
        }
    }
`;

export const Icon = styled.div`
    border-radius: 50%;
    width: 40px;
    height: 40px;

    & > img {
        width: 100%;
    }

    @media ${devices.tabletMax} {
        margin-right: 0px;
    }
`;
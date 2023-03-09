import React from "react";
import styled from "styled-components";
import DiscountButton from "../../../components/DiscountButton"
import { devices } from "../../../config/devices";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    font-family: var(--f-ubuntu);
    z-index: 1;

    @media ${devices.laptopMax} {
        width: 550px;
    }

    @media (max-width: 935px) {
        width: 450px;
    }

    @media ${devices.tabletMax} {
        width: 100%;
    }

    & > h1 {
    font-size: 4rem;
    font-weight: 500;
    margin: 30px 0px;

    @media ${devices.laptopMax} {
        font-size: 3.6rem;
    }

    @media (max-width: 935px) {
        font-size: 3rem
    }

    @media ${devices.tabletMax} {
        font-size: 3.5rem;
    }
    }

    & > h1 > span {
        color: var(--c-primary);
    }

    & > p {
        font-size: 1.3rem;
        font-weight: 400;
        padding-left: 3px;
        opacity: 0.5;
    }
`;

export default function Headboard() {
    return (
        <Container>
            <DiscountButton />
            <h1>The most delicious <span>Food</span> and the fastest <span>Delivery</span>.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </Container>
    )
}
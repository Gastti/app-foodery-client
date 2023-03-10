import React from "react";
import styled from "styled-components";
import DiscountButton from "../../../components/DiscountButton"
import { devices } from "../../../config/devices";
import { headboardContent } from "../HomeContent";

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
    margin-bottom: 30px;

    @media ${devices.laptopMax} {
        font-size: 3.6rem;
    }

    @media (max-width: 935px) {
        font-size: 3rem
    }

    @media ${devices.tabletMax} {
        font-size: 3.5rem;
    }

    @media ${devices.mobileMax} {
        font-size: 3rem;
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
        margin-bottom: 30px;
    }
`;

export default function Headboard() {
    return (
        <Container>
            <h1 dangerouslySetInnerHTML={{ __html: headboardContent.title }}></h1>
            <p>{headboardContent.paragraph}</p>
            <DiscountButton>{headboardContent.discount}</DiscountButton>
        </Container>
    )
}
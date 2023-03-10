import React from "react";
import styled, { keyframes } from "styled-components";

const animationScale = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`

const Container = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 10px 40px #00000022;
    padding: 40px;
    font-family: var(--f-ubuntu);

    &:hover {
        animation: ${animationScale} .1s linear forwards;
    }

    & > img {
        width: 100px;
    }

    & > h3 {
        font-size: 1.3rem;
        font-weight: 400;
    }

    & > p {
        font-size: 1rem;
        font-weight: 300;
        width: 200px;
        color: #a7a7a7;
    }
`;

export default function StepCard({ icon, title, description }) {
    return (
        <Container>
            <img src={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    )
}
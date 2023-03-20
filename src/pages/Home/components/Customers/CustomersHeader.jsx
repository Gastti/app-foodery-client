import React from "react";
import styled from "styled-components";
import Subtitle from "../../../../components/Subtitle";
import Button from "../../../../components/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 100px;
    flex-grow: 1;

    & > span {
        color: var(--c-primary);
        font-family: var(--f-ubuntu);
        font-size: 1.5rem;
    }

    & > h2 {
        margin: 10px 0px;
    }

    & > p {
        color: #a7a7a7;
        font-family: var(--f-ubuntu);
        font-size: 1.3rem;
        font-weight: 300;
    }

    & > button {
        margin-top: 20px;
    }

    @media (max-width: 999px) {
        text-align: center;
        align-items: center;
    }

    @media (max-width: 500px) {
        text-align: left;
        align-items: flex-start;
    }
`;

export default function CustomersHeader({ title, subtitle, paragraph, button_placeholder }) {
    return (
        <Container>
            <span>{title}</span>
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }}></Subtitle>
            <p>{paragraph}</p>
            <Button color='primary'>{button_placeholder}</Button>
        </Container>
    )
}
import React from "react";
import styled from "styled-components";
import Subtitle from "../../../../components/Subtitle";
import Button from "../../../../components/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 370px;
    max-height: 350px;

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

    @media (max-width: 1149px) {
        text-align: center;
    }
`;

export default function CustomersHeader({ title, subtitle, paragraph, button_placeholder }) {
    return (
        <Container>
            <span>{title}</span>
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }}></Subtitle>
            <p>{paragraph}</p>
            <Button primary>{button_placeholder}</Button>
        </Container>
    )
}
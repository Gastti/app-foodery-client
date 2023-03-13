import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import Subtitle from "../Subtitle";
import { SUBSCRIPTION_CARD_TEXT_EN } from "../../locals/en/global";
import { SUBSCRIPTION_CARD_TEXT_ES } from "../../locals/es/global";
import { devices } from "../../config/devices";

const Container = styled.div`
    flex-basis: 500px;
    flex-grow: 1;
    max-width: 1000px;
    background-color: #fff;
    box-shadow: 0px 0px 30px #00000011;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    margin: 0 auto;

    & > h2 {
        margin-bottom: 20px;
    }
`;

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    font-size: 1rem;
    margin: 0 auto;

    & > input {
        padding: 15px;
        font-size: inherit;
        border: none;
        border-radius: 8px 0px 0px 8px;
        background-color: #e8e8e8;
        color: #222222;
        flex-basis: 350px;
    }

    & > button {
        padding: 15px 30px;
        font-size: inherit;
        border: none;
        border-radius: 0px 8px 8px 0px;
        background-color: var(--c-primary);
        background: linear-gradient(90deg, rgba(255,107,0,1) 20%, #ff9100 100%);
        cursor: pointer;

        :hover {
            background: linear-gradient(90deg, rgba(255,107,0,1) 50%, #ff9100 100%);
        }
    }

    @media ${devices.mobileMax} {
        flex-direction: column;
        gap: 10px;

        & > input {
            border-radius: 8px;
            flex-basis: auto;
        }

        & > button {
            border-radius: 8px;
        }
    }
`;

export default function SubscriptionCard({ language }) {
    const CONTENT = language == 'es-ES'
        ? SUBSCRIPTION_CARD_TEXT_ES
        : SUBSCRIPTION_CARD_TEXT_EN

    return (
        <Container>
            <SectionTitle>{CONTENT.title}</SectionTitle>
            <Subtitle>{CONTENT.message}</Subtitle>
            <InputBox>
                <input type='email' placeholder='adress@gmail.com' />
                <button>{CONTENT.button_placeholder}</button>
            </InputBox>
        </Container>
    )
}
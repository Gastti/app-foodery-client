import React from "react";
import styled from "styled-components";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-width: 230px;
    min-height: 320px;
    flex-grow: 1;
    padding: 20px;
    border-radius: 15px;
    background: #fff;
    position: relative;
    text-align: center;

    & > p {
        color: #222222;
    }

    & > svg:nth-child(1) {
        position: absolute;
        color: var(--c-primary);
        top: 15px;
        left: 15px;
        transform: rotateZ(180deg);
    }

    & > svg:nth-child(6) {
        position: absolute;
        color: var(--c-primary);
        bottom: 15px;
        right: 15px;
    }

    & > span {
        width: 120px;
        height: 0px;
        border: 1px solid var(--c-primary);
        top: 0px;
    }
`;

const ProfilePicture = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    & > img {
        width: 100%;
        object-fit: cover;
    }
`;

const Customer = styled.div`
    & > b {
        position: relative;
    }
`;

export default function ReviewsCard({
    customer_image,
    customer_message,
    customer_name,
    customer_occupation
}) {
    return (
        <Container>
            <FormatQuoteIcon />
            <ProfilePicture><img src={customer_image} /></ProfilePicture>
            <p>{customer_message}</p>
            <span></span>
            <Customer>
                <b>{customer_name}</b>
                <p style={{ color: '#a9a9a9' }}>{customer_occupation}</p>
            </Customer>
            <FormatQuoteIcon />
        </Container>
    )
}
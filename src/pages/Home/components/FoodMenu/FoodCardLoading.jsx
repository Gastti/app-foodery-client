import React from "react";
import styled, { keyframes } from "styled-components";

export default function FoodCardLoading() {
    return (
        <CardContainer>
            <span></span>
            <span></span>
            <span></span>
        </CardContainer>
    )
}

const shine = keyframes`
  to {
    background-position-x: -400%;
  }
`

const CardContainer = styled.div`
    position: relative;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #f1f1f1;
    background: linear-gradient(110deg, #f1f1f1 8%, #f9f9f9 18%, #f1f1f1 33%);
    background-size: 400% 100%;
    animation: ${shine} 5s linear infinite;

    & > span {
        padding: 10px;
        border-radius: 5px;
        margin-left: 20px;
        background: #f1f1f1;
        background: linear-gradient(110deg, #e7e7e7 8%, #f7f7f733 18%, #e7e7e7 33%);
        border-radius: 5px;
        background-size: 400% 100%;
        animation: ${shine} 5s linear infinite;
    }

    & > span:nth-child(1) {
        max-width: 200px;
        margin-bottom: 10px;
    }

    & > span:nth-child(2) {
        max-width: 50px;
        margin-bottom: 10px;
    }

    & > span:nth-child(3) {
        max-width: 150px;
        margin-bottom: 20px;
    }
`
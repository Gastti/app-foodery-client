import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 10px 40px #00000022;
    overflow: hidden;
    min-width: 250px;
    max-width: 500px;
    flex-basis: 0;
    flex-grow: 1;

    & > div:first-child{
        display: flex;
        align-items: center;
        width: 100%;
        height: 200px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    & > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        flex-grow: 1;

        p {
            color: #919191;
            font-size: 1.2rem;
            font-weight: 400;
        }

        h4 {
            font-size: 2rem;
            font-family: var(--f-ubuntu);
            margin: 10px 0px;
        }

        button {
            bottom: 0;
            margin-top: 40px;
        }
    }
`

export default function ArticlesCard({
    image,
    date,
    title,
    paragraph,
    button_placeholder
}) {
    return (
        <Container>
            <div>
                <img src={image} />
            </div>
            <div>
                <p>{date}</p>
                <h4>{title}</h4>
                <p>{paragraph}</p>
                <Button color='primary'>{button_placeholder}</Button>
            </div>
        </Container>
    )
}
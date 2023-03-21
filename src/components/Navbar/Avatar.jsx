import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #e3e3e3;

    & > img {
        width: 100%;
        object-fit: cover;
    }
`

export default function Avatar({ image }) {
    return (
        <Container>
            <img src={image} />
        </Container>
    )
}

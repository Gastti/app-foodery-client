import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        font-size: 1.5rem;
    }

    & > p:last-child {
        font-weight: 500;
        font-size: 1rem;

        & > span {
            color: var(--c-primary);
        }
    }
`

export default function WelcomeContent({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

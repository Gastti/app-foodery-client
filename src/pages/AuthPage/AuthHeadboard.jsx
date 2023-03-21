import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 450px;
  flex-basis: 1;
  flex-grow: 1;

  & > h2 {
    font-size: 4rem;
    font-family: var(--f-ubuntu);
    color: var(--c-primary);
  }

  & > p {
    font-size: 1.5rem;
    color: #00000063;
  }
`

export default function AuthHeadboard() {
  return (
    <Container>
      <h2>Foodery</h2>
      <p>Foodery is an application to buy food quickly and effectively. With the idea of providing an efficient delivery service.</p>
    </Container>
  )
}

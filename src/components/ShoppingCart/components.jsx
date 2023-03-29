import styled from 'styled-components';

export const CartBackground = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 15;
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
`

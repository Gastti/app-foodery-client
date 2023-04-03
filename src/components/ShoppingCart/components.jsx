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
    justify-content: space-between;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 500px;
    background-color: #fff;
    padding: 20px;

    & > :not(first-child) {
        gap: 20px;
    }
`

export const CartHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
        padding: 10px 0px;
    }
`;

export const CartBody = styled.div`
    max-height: calc(100vh - 300px);
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 6px;
    }

    /* For the scrollbar handle */
    ::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 5px;
    }

    /* For the scrollbar handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #c7c7c7;
    }
`
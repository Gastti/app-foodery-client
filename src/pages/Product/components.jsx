import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
`;

export const ProductImage = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    border-radius: 5px;
    overflow: hidden;
    max-height: 400px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProductBody = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-start;
    
    & > h1 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    & > p {
        font-size: 1.1rem;
        color: rgba(0, 0, 0, 0.8);
    }

    & > span {
        background-color: #fff;
        padding: 5px 15px;
        font-size: 1.3rem;
        border-radius: 15px;
        border: 1px solid rgba(0, 0, 0, 0.07);
        color: rgba(0, 0, 0, 0.5);

        & > strong {
            color: var(--c-primary);
            font-weight: 500;
        }
    }
`;
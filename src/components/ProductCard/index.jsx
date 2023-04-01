import React, { memo } from "react";
import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';


export default function ProductCard({ product, addToCart }) {
    const { id, name, image, price, desc } = product;
    const descSumary = desc.length > 200 ? desc.slice(0, 200) + '...' : desc;
    const href = `/product/${id}`;

    return (
        <ProductCardStyled>
            <Image>
                <img src={image} alt={name} />
            </Image>
            <ProductBody>
                <BodyHeader>
                    <NavLink to={href}>{name}</NavLink>
                    <p>{descSumary}</p>
                </BodyHeader>
                <BodyInfo>
                    <p>
                        PRICE
                        <br />
                        <span>${price}</span>
                    </p>
                    <button onClick={() => addToCart(id, 1)}><AddShoppingCartIcon /></button>
                </BodyInfo>
            </ProductBody>
        </ProductCardStyled >
    )
}

const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    height: 200px;

    @media (max-width: 800px) {
        height: 250px;
    }

    @media (max-width: 660px) {
        flex-direction: column;
        height: auto;
    }
`

const ProductBody = styled.div`
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 0;
    flex-grow: 2;
`

const Image = styled.div`
    overflow: hidden;
    flex-basis: 0;
    flex-grow: 1;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 660px) {
        flex-basis: 250px;
    }
`
const BodyHeader = styled.div`
    & > a {
        font-size: 1.5rem;
        font-weight: 500;
        color: #222222;

        :hover {
            text-decoration: underline;
        }
    }

    & > span {
        
    }
`

const BodyInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    p {
        font-weight: 500;
        color: rgba(0, 0, 0, 0.2);
        
        span {
            color: #222222;
            font-size: 1.2rem;
        }
    }

    button {
        padding: 5px;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
        transition: all .2s;
        background-color: var(--c-primary);
        background: var(--g-primary);
        display: flex;
    
        :hover {
            transform: scale(1.1);
            background: var(--g-primary-h);
        }

        :active {
            transform: scale(1);
        }
    }
`;
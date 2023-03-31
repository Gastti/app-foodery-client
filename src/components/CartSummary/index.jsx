import React from 'react';
import styled from 'styled-components';

export default function CartSummary({ subtotal, shipping_cost }) {
    return (
        <CartSummaryContainer>
            <p>
                <span>Subtotal</span>
                <span>${subtotal}</span>
            </p>
            <p>
                <span>Shipping</span>
                <span>${shipping_cost}</span>
            </p>
            <p>
                <span>Total</span>
                <span>${subtotal + shipping_cost}</span>
            </p>
        </CartSummaryContainer>
    )
}

const CartSummaryContainer = styled.div`
    & > p {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 1.2rem;

        & > span:first-child {
            color: #bababa;
        }
    }

    & > p:last-child {
        font-weight: 500;

        span:first-child {
            color: #222222;
        }
    }
`

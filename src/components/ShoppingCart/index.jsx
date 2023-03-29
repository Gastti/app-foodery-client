import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import { CartBackground, CartContainer } from './components';

export default function ShoppingCart() {
    return (
        <>
            {(
                <CartBackground>
                    <CartContainer>
                        <h2>Shopping Cart</h2>
                    </CartContainer>
                </CartBackground>
            )}
        </>
    )
}
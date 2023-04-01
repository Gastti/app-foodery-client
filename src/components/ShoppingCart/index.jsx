import React, { useState, useEffect } from 'react';
import { CartBackground, CartBody, CartContainer, CartHeader } from './components';
import { useConfig } from '../../contexts/ConfigContext';
import CartItem from './CartItem';
import SquareButton from '../SquareButton';
import CloseIcon from '@mui/icons-material/Close';
import CartSummary from '../CartSummary';
import Button from '../Button';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

export default function ShoppingCart() {
    const { removeFromCart } = useCart();
    const { handleCartState } = useConfig();
    const { cart } = useAuth();
    const cartProducts = cart ? cart.items : [];

    const handleCartContainerClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            {(
                <CartBackground onClick={handleCartState}>
                    <CartContainer onClick={handleCartContainerClick}>
                        <CartHeader>
                            <h2>Order</h2>
                            <SquareButton icon={<CloseIcon />} onClick={handleCartState} size='2rem' />
                        </CartHeader>
                        <CartBody>
                            {cartProducts.length === 0 && <p>Your shopping cart is empty.</p>}
                            {cartProducts.length > 0 && cartProducts.map((item) => {
                                return (
                                    <CartItem
                                        key={item.product.id}
                                        product={item.product}
                                        quantity={item.quantity}
                                        id={item.id}
                                        removeFromCart={removeFromCart}
                                    />
                                )
                            })}
                        </CartBody>
                        {cartProducts.length > 0 && (
                            <>
                                <CartSummary subtotal={10} shipping_cost={10} />
                                <Button color='primary'>Proceed to Checkout</Button>
                            </>
                        )}
                    </CartContainer>
                </CartBackground>
            )}
        </>
    )
}
import React, { useState, useEffect } from 'react';
import useCart from '../../hooks/useCart';
import { CartBackground, CartBody, CartContainer, CartHeader } from './components';
import { useConfig } from '../../contexts/ConfigContext';
import CartItem from './CartItem';
import SquareButton from '../SquareButton';
import CloseIcon from '@mui/icons-material/Close';
import CartSummary from '../CartSummary';
import Button from '../Button';

export default function ShoppingCart() {
    const { handleCartState } = useConfig();
    const { shoppingCart } = useCart();

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
                        {/* <CartBody>
                            {cartItems.length === 0 && <p>Your shopping cart is empty.</p>}
                            {cartItems.length > 0 && cartItems.map((item) => {

                                return (
                                    <CartItem
                                        image={item.product.image}
                                        name={item.product.name}
                                        price={item.product.price}
                                        quantity={item.quantity}
                                    />
                                )
                            })}
                        </CartBody>
                        {cartItems.length > 0 && (
                            <>
                                <CartSummary subtotal={26} shipping_cost={10} />
                                <Button color='primary'>Proceed to Checkout</Button>
                            </>
                        )} */}
                    </CartContainer>
                </CartBackground>
            )}
        </>
    )
}
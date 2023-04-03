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
    const [cartProducts, setCartProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        if (cart) {
            setCartProducts(cart.items);
        }
    }, [cart])

    useEffect(() => {
        let calculateSubtotal = cartProducts.reduce((acc, item) => {
            return acc + (item.product.price * item.quantity);
        }, 0);

        setSubtotal(Number(calculateSubtotal.toFixed(2)));
    }, [cartProducts])

    const handleRemove = (id) => {
        removeFromCart(id);
        setCartProducts(cartProducts.filter((item) => item.id !== id));
    }

    const handleCartContainerClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            {(
                <CartBackground onClick={handleCartState}>
                    <CartContainer onClick={handleCartContainerClick}>
                        <div>
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
                                            item={item}
                                            removeFromCart={handleRemove}
                                        />
                                    )
                                })}
                            </CartBody>
                        </div>
                        {cartProducts.length > 0 && (
                            <div>
                                <CartSummary subtotal={subtotal} shipping_cost={5} />
                                <Button color='primary'>Proceed to Checkout</Button>
                            </div>
                        )}
                    </CartContainer>
                </CartBackground>
            )}
        </>
    )
}
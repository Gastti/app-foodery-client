import React, { useState } from 'react';

export default function useCart() {
    const [cartItems, setCartItems] = useState([]);
    const [opened, setOpened] = useState(false);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemIndex) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(itemIndex, 1);
        setCartItems(newCartItems);
    };

    // const clearCart = () => {
    //     setCartItems([]);
    // };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const toggleCart = () => {
        setOpened(!opened);
        console.log('clicked');
        console.log(opened);
    }

    return { cartItems, addToCart, removeFromCart, getCartTotal, opened, toggleCart };
}
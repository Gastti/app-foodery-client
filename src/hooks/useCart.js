import { useState, useEffect, useCallback } from 'react';
import { useConfig } from '../contexts/ConfigContext';
import { loadCart, addProductToCart } from '../services/cart';
import { useAuth } from '../services/auth';

export default function useCart() {
    const auth = useAuth();
    const { isCartOpen } = useConfig();
    const [states, setStates] = useState({ loading: true, error: false });
    const [shoppingCart, setShoppingCart] = useState({ items: [], total: 0 })

    const getCart = useCallback(async () => {
        try {
            const data = await loadCart(auth.token);
            setShoppingCart({ items: data.cart_items, total: data.total });
        } catch (error) {
            console.log(error);
        }
    }, [auth.token]);

    useEffect(() => {
        getCart();
        console.log('RENDER');
    }, [getCart])

    const addToCart = async (product_id, quantity) => {
        const data = await addProductToCart(auth.token, { product_id, quantity });
        console.log(data);
    };

    return { shoppingCart, addToCart };
}
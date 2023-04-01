import React, { createContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const CartContext = createContext();

function CartProvider({ children }) {
    const auth = useAuth();
    const [shoppingCart, setShoppingCart] = useState({ items: [], total: 0 })

    const getCart = useCallback(async () => {
        try {
            const data = await loadCart(auth.token);
            setShoppingCart({ items: data.cart_items, total: data.total });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getCart();
        console.log('RENDER');
    }, [getCart])

    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
import { addProductToCart, removeProductFromCart } from '../services/cart';
import { useAuth } from '../hooks/useAuth';

function useCart() {
    const { token } = useAuth();

    const addToCart = async (product_id, quantity) => {
        const data = await addProductToCart(token, { product_id, quantity });
    };

    const removeFromCart = async (cart_item_id) => {
        const data = await removeProductFromCart(token, cart_item_id);
        console.log(data);
    }

    return { addToCart, removeFromCart };
}

export { useCart };
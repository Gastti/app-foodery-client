import { API_URL } from './config';

const fetchCart = async (token) => {
    try {
        if (!token) {
            return null
        }

        const response = await fetch(`${API_URL}/cart`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            console.log('Error en loadCart');
            return [];
        }

        const { data } = await response.json();
        console.log('Services[Cart] - fetchCart: Done!');
        return data;
    } catch (error) {
        console.log(error);
        return []
    }
}

const addProductToCart = async (token, product) => {
    try {
        const response = await fetch(`${API_URL}/cart/additem`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            console.log('Error en addProductToCart');
            return [];
        }

        const { data } = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error on addProductToCart');
        console.log(error);
    }
}

const removeProductFromCart = async (token, cart_item_id) => {
    try {
        const response = await fetch(`${API_URL}/cart/deleteitem`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cart_item_id })
        });

        if (!response.ok) {
            console.log('Error on removeProductFromCart');
            return null;
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error on removeProductFromCart');
        console.log(error);
    }
}

export { fetchCart, addProductToCart, removeProductFromCart }
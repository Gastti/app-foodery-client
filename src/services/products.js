import { API_URL } from './config';

const loadProducts = async (cb, limit = 25, page = 1) => {
    fetch(`${API_URL}/products?limit=${limit}&page=${page}`)
        .then(data => data.json())
        .then(data => cb(data.data))
}

const loadProductsCategory = async (category, limit, page) => {
    const response = await fetch(`${API_URL}/products/search?category=${category}&limit=${limit}&page=${page}`)
    if (!response.ok) {
        console.log('Error en loadProductsQuery');
    }

    const { data } = await response.json();
    console.log(data);
    return data;
}

export {
    loadProducts,
    loadProductsCategory
}
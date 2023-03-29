import { API_URL } from './config';

const loadProducts = async (cb, limit = 25, page = 1) => {
    fetch(`${API_URL}/products?limit=${limit}&page=${page}`)
        .then(data => data.json())
        .then(data => cb(data.data))
}

const loadProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/find/${id}`);

        if (!response.ok) {
            console.log('Error en loadProductById');
            return [];
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log('Error en loadPopularProducts');
        return [];
    }
}

const loadProductsCategory = async (category, limit, page) => {
    const response = await fetch(`${API_URL}/products/search?category=${category}&limit=${limit}&page=${page}`)

    if (!response.ok) {
        console.log('Error en loadProductsQuery');
    }

    const { data } = await response.json();
    return data;
}

const loadProductsByName = async (name, limit, page) => {
    const response = await fetch(`${API_URL}/products/search?name=${name}&limit=${limit}&page=${page}`)

    if (!response.ok) {
        console.log('Error en loadProductsQuery');
    }

    const { data } = await response.json();
    return data;
}

const loadPopularProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products/popular`);

        if (!response.ok) {
            console.log('Error en loadPopularProducts');
            return [];
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.log('Error en loadPopularProducts');
        return [];
    }
}

export {
    loadProducts,
    loadProductById,
    loadProductsCategory,
    loadProductsByName,
    loadPopularProducts
}
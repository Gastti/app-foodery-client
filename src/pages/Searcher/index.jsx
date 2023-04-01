import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import { loadProductsByName } from '../../services/products';
import ProductCard from '../../components/ProductCard';
import { ProductsContainer } from './ProductsContainer';
import BadRequest from './BadRequest';
import NoResults from './NoResults';
import { useCart } from '../../hooks/useCart';

export default function Searcher() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [findError, setFindError] = useState(false);
    const { slug } = useParams();

    const fetchProductsByName = useCallback(async (name) => {
        const data = await loadProductsByName(name);
        return data;
    }, []);

    useEffect(() => {
        if (slug.length < 2) {
            setError(true);
            setFindError(false);
        } else {
            setError(false);
            const getProducts = async () => {
                const data = await fetchProductsByName(slug);
                if (data) {
                    setProducts(data.products);
                    setFindError(false);
                } else {
                    setFindError(true);
                }
            }
            getProducts();
        }
    }, [slug, loadProductsByName]);

    return (
        <Container
            substyle={{ paddingTop: '150px' }}
        >
            {(!error && !findError) && (
                <h2 style={{ fontSize: '2rem', fontWeight: '500', color: '#222222', marginBottom: '25px' }}>
                    Search results of:
                    <span style={{ color: '#b3b3b3' }}> {slug}</span>
                </h2>
            )}
            {error && <BadRequest />}
            {findError && <NoResults slug={slug} />}
            {!error && (
                <ProductsContainer>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </ProductsContainer>
            )}
        </Container>
    )
}

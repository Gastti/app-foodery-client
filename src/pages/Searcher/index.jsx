import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import { loadProductsByName } from '../../services/products';
import { ProductCard } from '../../components/ProductCard';
import { ProductsContainer } from './ProductsContainer';
import BadRequest from './BadRequest';
import NoResults from './NoResults';

export default function Searcher() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [findError, setFindError] = useState(false);
    const { slug } = useParams();
    
    useEffect(() => {
        if (slug.length < 2) {
            setError(true);
            setFindError(false);
        } else {
            setError(false);
            const getProducts = async () => {
                const data = await loadProductsByName(slug);
                if (data) {
                    setProducts(data.products);
                    setFindError(false);
                } else {
                    setFindError(true);
                }
            }
            getProducts();
        }
    }, [slug])

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
                            name={product.name}
                            image={product.image}
                            description={product.desc}
                            price={product.price}
                        />
                    ))}
                </ProductsContainer>
            )}
        </Container>
    )
}

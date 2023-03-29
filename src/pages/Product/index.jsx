import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../components/Container'
import { loadProductById } from '../../services/products';
import { ProductBody, ProductContainer, ProductImage } from './components';
import Button from '../../components/Button';

export default function Product() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const { product_id } = useParams();

    useEffect(() => {
        setError(false);
        const getProducts = async () => {
            const data = await loadProductById(product_id);
            if (data) {
                setProduct(data);
                setError(false);
            } else {
                setError(true);
            }
        }
        getProducts();
    }, [])

    return (
        <Container
            substyle={{ paddingTop: '150px' }}
        >
            <ProductContainer>
                <ProductImage>
                    <img src={product.image} />
                </ProductImage>
                <ProductBody>
                    <h1>{product.name}</h1>
                    <p>{product.desc}</p>
                    <span>
                        Price: <strong>${product.price}</strong>
                    </span>
                    <Button color='primary'>Add to Cart</Button>
                </ProductBody>
            </ProductContainer>
        </Container>
    )
}

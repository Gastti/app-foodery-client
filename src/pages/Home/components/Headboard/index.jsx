import React, { useEffect, useState, useMemo } from "react";
import Container from "../../../../components/Container";
import HeadboardContent from "./HeadboardContent";
import { loadPopularProducts } from "../../../../services/products";
import MainProduct from "./MainProduct";
import ProductCard from "./ProductCard";
import Slider from "../../../../components/Slider";

export default function Headboard() {
    const [popularProducts, setPopularProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await loadPopularProducts();
                setPopularProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, []);

    console.log(popularProducts);
    console.log(isLoading);

    return (
        <Container primary padding substyle={{ paddingTop: '140px' }}>
            {!isLoading && <MainProduct product={popularProducts[active]} />}
            <Slider
                title='Popular Foods'
                items={popularProducts.filter((product, index) => index != active)}
            />
        </Container>
    )
}
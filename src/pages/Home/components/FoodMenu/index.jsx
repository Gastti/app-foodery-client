import React, { useState } from "react";
import Container from "../../../../components/Container";
import FoodList from "./FoodList"
import { useProducts } from "../../../../utils/useProducts";
import FoodHeader from "./FoodHeader";
import { loadProductsCategory } from "../../../../services/products";

export default function FoodMenu({ isMobile, isTablet }) {
    const { categories, nextPage, prevPage } = useProducts();
    const [currentCategory, setCurrentCategory] = useState('burger');
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const getProducts = async () => {
            const data = await loadProductsCategory(currentCategory, 2, page);
            if (data) setLoading(false)
            
            setProducts(data?.products)
            setTotalPages(data?.pages.total);
        }

        setTimeout(() => {
            getProducts();
        }, 2000)

        if (page > totalPages) {
            setPage(1);
        } else if (page < 1) {
            setPage(totalPages);
        }
    }, [page, currentCategory]);

    const handleCategoryChange = (category = '') => {
        setCurrentCategory(category.toLowerCase())
        setPage(1);
    }

    return (
        <Container padding>
            <FoodHeader
                page={page}
                setPage={setPage}
                prevPage={prevPage}
                nextPage={nextPage}
                isTablet={isTablet}
            />
            <FoodList
                categories={categories}
                currentCategory={currentCategory}
                handleCategoryChange={handleCategoryChange}
                products={products}
                isMobile={isMobile}
                loading={loading}
            />
        </Container>
    )
}
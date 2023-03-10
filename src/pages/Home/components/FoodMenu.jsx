import React from "react";
import Container from "../../../components/Container";
import FoodList from "../components/FoodList"
import { useProducts } from "../../../utils/useProducts";
import FoodHeader from "./FoodHeader";

export default function FoodMenu({ isSmallScreen, isTabletScreen }) {
    const { getProductsByCategory, categories, nextPage, prevPage } = useProducts();
    const [currentCategory, setCurrentCategory] = React.useState(1);
    const [products, setProducts] = React.useState([]);
    const [totalPages, setTotalPages] = React.useState(1);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        const getProducts = getProductsByCategory(currentCategory, 2, page);

        setProducts(getProducts.data)
        setTotalPages(getProducts.pages.total)

        if (page > totalPages) {
            setPage(1);
        } else if (page < 1) {
            setPage(totalPages)
        }
    }, [page, currentCategory]);

    const handleCategoryChange = (id) => {
        setCurrentCategory(id)
        setPage(1);
    }

    return (
        <Container padding>
            <FoodHeader
                page={page}
                setPage={setPage}
                prevPage={prevPage}
                nextPage={nextPage}
                isTabletScreen={isTabletScreen}
            />
            <FoodList
                categories={categories}
                currentCategory={currentCategory}
                handleCategoryChange={handleCategoryChange}
                products={products}
                isSmallScreen={isSmallScreen}
            />
        </Container>
    )
}
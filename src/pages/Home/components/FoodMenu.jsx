import React from "react";
import styled from "styled-components";
import { devices, size } from "../../../config/devices";
import { foodMenuContent } from "../HomeContent";
import Container from "../../../components/Container";
import Subtitle from "../../../components/Subtitle";
import FoodList from "../components/FoodList"
import { useProducts } from "../../../utils/useProducts";
import { useMediaQuery } from "react-responsive";
import FoodNavigation from "./FoodNavigation";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    

    @media ${devices.mobileMax} {
        flex-direction: column;
    }

    & > div:nth-child(1) {

        p {
            font-size: 1.3rem;
            font-weight: 400;
            padding-left: 3px;
            opacity: 0.5;
            margin-bottom: 30px;
        }
    }

    & > div:nth-child(2) > button:nth-child(2) > svg {
        margin-right: -4px;
    }

`

export default function FoodMenu({ isSmallScreen }) {
    const { getProductsByCategory, categories, nextPage, prevPage, totalPages } = useProducts();
    const [currentCategory, setCurrentCategory] = React.useState(1);
    const [products, setProducts] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const isTabletScreen = useMediaQuery({ maxWidth: size.tablet });

    React.useEffect(() => {
        const getProducts = getProductsByCategory(currentCategory, 2, page);
        setProducts(getProducts)

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
        <Container>
            <Header>
                <div>
                    <Subtitle dangerouslySetInnerHTML={{ __html: foodMenuContent.title }} />
                    <p>{foodMenuContent.paragraph}</p>
                </div>
                {
                    !isTabletScreen &&
                    <FoodNavigation
                        page={page}
                        setPage={setPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                }
            </Header>
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
import React from "react";
import FoodCard from "./FoodCard";
import {
    FlexContainer,
    FoodListContent,
    FoodLi,
    Icon,
    FoodProductsContent
} from "./FoodListComponents";

export default function FoodList({
    categories,
    currentCategory,
    handleCategoryChange,
    products,
    isSmallScreen
}) {
    return (
        <FlexContainer>
            <FoodListContent>
                {
                    categories.map((category) => {
                        return (
                            <FoodLi
                                key={category.name}
                                onClick={() => handleCategoryChange(category.id)}
                                active={currentCategory == category.id}
                            >
                                <Icon><img src={category.icon} /></Icon>
                                {!isSmallScreen && category.name}
                            </FoodLi>
                        )
                    })
                }
            </FoodListContent>
            <FoodProductsContent>
                {
                    products.map((product) => {
                        return (
                            <FoodCard
                                key={product.name}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        )
                    })
                }
            </FoodProductsContent>
        </FlexContainer>
    )
}
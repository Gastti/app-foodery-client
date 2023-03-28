import React from "react";
import FoodCard from "./FoodCard";
import FoodCardLoading from "./FoodCardLoading";
import {
    FlexContainer,
    FoodListContent,
    FoodLi,
    Icon
} from "./FoodListComponents";

export default function FoodList({
    categories,
    currentCategory,
    handleCategoryChange,
    products,
    isMobile,
    loading
}) {
    return (
        <FlexContainer>
            <FoodListContent>
                {categories.map((category) => {
                    return (
                        <FoodLi
                            key={category.name}
                            onClick={() => handleCategoryChange(category.name)}
                            active={currentCategory == category.name.toLowerCase()}
                        >
                            <Icon><img src={category.icon} /></Icon>
                            <span>{!isMobile && category.name}</span>
                        </FoodLi>
                    )
                })}
            </FoodListContent>
            {!loading && products.map((product) => {
                return (
                    <FoodCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                )
            })}
            {loading && [...Array(2)].map((_, index) => (
                <FoodCardLoading key={index} />
            ))}
        </FlexContainer>
    )
}
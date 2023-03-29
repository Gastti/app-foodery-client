import React, { useState } from "react";
import styled from "styled-components";
import DiscountButton from "../../../../components/DiscountButton"
import Subtitle from "../../../../components/Subtitle";
import { devices } from "../../../../config/devices";
import { headboardContent } from "../../HomeContent";
import MainProduct from "./MainProduct";
import ProductCard from "./ProductCard";

export default function HeadboardContent({ products, isLoading }) {
    const [active, setActive] = useState(2);
    console.log(products);
    return (
        <Container>
            {!isLoading && products.map((product, index) => {
                const { name, image, desc, price } = product;

                if (index == active) {
                    return (
                        <MainProduct
                            key={name}
                            name={name}
                            image={image}
                            description={desc}
                            price={price}
                        />
                    )
                }

                return null;

            })}
            <div>
                {!isLoading && products.map((product, index) => {
                    const { name, image, desc, price } = product;

                    if (index != active) {
                        return (
                            <ProductCard
                                key={name}
                                name={name}
                                image={image}
                                description={desc}
                                price={price}
                                onClick={() => setActive(index)}
                            />
                        )
                    }

                    return null;

                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--f-ubuntu);
    z-index: 1;

    & > div {
        display: flex;
        flex-grow: 1;
        flex-flow: row wrap;
        justify-content: center;
        max-width: 1200px;
    
    }
`;
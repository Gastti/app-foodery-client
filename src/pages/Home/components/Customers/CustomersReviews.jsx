import React from "react";
import styled from "styled-components";
import ReviewsCard from "./ReviewsCard";

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: clamp(300px, 700px, 100%);
    gap: 50px;

    @media (max-width: 1149px) {
        margin-top: 50px;
        justify-content: center;
    }
`

export default function CustomersReviews({ reviews }) {
    return (
        <Container>
            {
                reviews.map((review) => {
                    return (
                        <ReviewsCard
                            key={review.name}
                            customer_image={review.image}
                            customer_message={review.message}
                            customer_name={review.name}
                            customer_occupation={review.occupation}
                        />
                    )
                })
            }
        </Container>
    )
}
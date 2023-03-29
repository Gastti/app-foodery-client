import React from "react";
import Container from "../../../../components/Container";
import {
    CUSTOMERS_CONTENT_EN,
    CUSTOMERS_CONTENT_ES,
    CUSTOMERS_REVIEWS
} from "../../HomeContent";
import CustomersHeader from "./CustomersHeader";
import CustomersReviews from "./CustomersReviews";
import { CustomersContainer } from "./CustomersContainer";

export default function Customers({ language }) {
    const CONTENT = language == 'es-ES'
        ? CUSTOMERS_CONTENT_ES
        : CUSTOMERS_CONTENT_EN;
    const REVIEWS = CUSTOMERS_REVIEWS;

    return (
        <Container>
            <CustomersContainer>
                <CustomersHeader
                    title={CONTENT.title}
                    subtitle={CONTENT.subtitle}
                    paragraph={CONTENT.paragraph}
                    button_placeholder={CONTENT.button_placeholder}
                />
                <CustomersReviews reviews={REVIEWS} />
            </CustomersContainer>
        </Container>
    )
}
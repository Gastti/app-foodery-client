import React from "react";
import AccordionCard from "../../../../components/AccordionCard";
import Container from "../../../../components/Container";
import { FAQ_CONTENT } from "../../HomeContent";
import { FAQContainer, QueriesContainer } from "./FAQComponents"

export default function FAQ() {
    return (
        <Container>
            <FAQContainer>
                <QueriesContainer>
                    {
                        FAQ_CONTENT.map((element) => {
                            const { query, reply } = element;
                            return (
                                <AccordionCard
                                    key={query}
                                    query={query}
                                    reply={reply}
                                />
                            )
                        })
                    }
                </QueriesContainer>
            </FAQContainer>

        </Container>
    )
}
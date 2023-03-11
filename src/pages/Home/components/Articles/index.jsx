import React from "react";
import {
    ARTICLES_CONTENT_EN,
    ARTICLES_CONTENT_ES,
    ARTICLES_PLACEHOLDER
} from "../../HomeContent";
import Container from "../../../../components/Container";
import ArticlesHeader from "./ArticlesHeader";
import { ArticlesContainer } from "./ArticlesContainer";
import ArticlesCard from "./ArticlesCard";

export default function Articles({ language }) {
    const ARTICLES = ARTICLES_PLACEHOLDER
    const ARTICLES_CONTENT = language == 'es-ES'
        ? ARTICLES_CONTENT_ES
        : ARTICLES_CONTENT_EN

    return (
        <Container
            padding
        >
            <ArticlesHeader
                title={ARTICLES_CONTENT.title}
                subtitle={ARTICLES_CONTENT.subtitle}
                paragraph={ARTICLES_CONTENT.paragraph}
            />
            <ArticlesContainer>
                {
                    ARTICLES.map((article) => {
                        return (
                            <ArticlesCard
                                key={article.title}
                                title={article.title}
                                paragraph={article.paragraph}
                                date={article.date}
                                image={article.image}
                                button_placeholder={article.button_placeholder}
                            />
                        )
                    })
                }
            </ArticlesContainer>
        </Container>
    )
}
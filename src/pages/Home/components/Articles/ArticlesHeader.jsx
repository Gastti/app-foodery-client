import React from "react";
import Subtitle from "../../../../components/Subtitle";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Paragraph } from "../../../../components/Paragraph"

export default function ArticlesHeader({ title, subtitle, paragraph }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <SectionTitle>{title}</SectionTitle>
            <Subtitle>{subtitle}</Subtitle>
            <Paragraph>{paragraph}</Paragraph>
        </div>
    )
}
import React from "react";
import styled from "styled-components";
import { stepsContent } from "../HomeContent";
import Container from "../../../components/Container";
import Subtitle from "../../../components/Subtitle";
import StepsCard from "./StepsCard";

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 60px;

    @media (max-width: 800px) {
        flex-flow: column wrap;
        gap: 60px;
    }
`;

export default function StepsPage() {
    return (
        <Container
            style={{ textAlign: 'center'}}
            padding
        >
            <Subtitle dangerouslySetInnerHTML={{ __html: stepsContent.title }} />
            <FlexContainer>
                {
                    stepsContent.steps.map((step) => {
                        return <StepsCard
                            key={step.title}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                        />
                    })
                }
            </FlexContainer>
        </Container>
    )
}
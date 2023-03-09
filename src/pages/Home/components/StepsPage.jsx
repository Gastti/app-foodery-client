import React from "react";
import styled from "styled-components";
import { stepsContent } from "../HomeContent";
import Container from "../../../components/Container";
import Subtitle from "../../../components/Subtitle";
import StepCard from "./StepCard";

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`;

export default function StepsPage() {
    return (
        <Container
            style={{ textAlign: 'center' }}
            padding
        >
            <Subtitle dangerouslySetInnerHTML={{ __html: stepsContent.title }} />
            <FlexContainer>
                {
                    stepsContent.steps.map((step) => {
                        return <StepCard
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
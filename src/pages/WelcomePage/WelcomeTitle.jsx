import React from "react";
import styled from "styled-components";
import { devices } from "../../config/devices";

const SubtitleContainer = styled.h2`
    font-family: var(--f-ubuntu);
    font-size: ${props => props.fontsize ? props.fontsize : '3rem'};
    font-weight: 500;
    line-height: 3.5rem;

    @media (max-width: 935px) {
        font-size: 3rem
    }

    @media ${devices.tabletMax} {
        font-size: 3rem;
    }

    @media ${devices.mobileMax} {
        font-size: 2.3rem;
    }

    & > span {
        color: var(--c-primary);
    }
`;

export default function WelcomeTitle({ children, fontsize }) {
    return (
        <SubtitleContainer fontsize={fontsize}>
            {children}
        </SubtitleContainer>
    )
}
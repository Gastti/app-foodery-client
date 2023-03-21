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

export default function Subtitle({ children, fontsize }) {
    const text = children?.split(' ');

    return (
        <SubtitleContainer fontsize={fontsize}>
            {text?.map(t => {
                if (t.charAt(0) === t.charAt(t.length - 1) && t.charAt(0) === "&") {
                    let modt = t.slice(1, -1);
                    return <span key={modt}> {modt} </span>
                } else {
                    return t + ' '
                }
            })}
        </SubtitleContainer>
    )
}
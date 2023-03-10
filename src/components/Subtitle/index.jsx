import React from "react";
import styled from "styled-components";
import { devices } from "../../config/devices";

const Subtitle = styled.h2`
    font-family: var(--f-ubuntu);
    font-size: 3rem;
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

export default Subtitle;
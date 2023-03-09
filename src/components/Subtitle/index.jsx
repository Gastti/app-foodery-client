import React from "react";
import styled from "styled-components";

const Subtitle = styled.h2`
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 3.5rem;

    & > span {
        color: var(--c-primary);
    }
`;

export default Subtitle;
import React from "react";
import styled from "styled-components";

export const Subtitled = styled.h2`
    font-size: 3rem;
    font-weight: 500;

    & > span {
        color: var(--c-primary);
    }
`;
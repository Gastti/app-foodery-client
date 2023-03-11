import React from "react";
import styled from "styled-components";

export const CustomersContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 999px) {
        flex-flow: column wrap;
    }
`
import React from "react";
import styled from "styled-components";

export const CustomersContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media (max-width: 1149px) {
        justify-content: center;
    }
`
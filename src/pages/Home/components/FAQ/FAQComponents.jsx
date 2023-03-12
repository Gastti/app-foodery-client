import React from "react";
import styled from "styled-components";
import FAQImage from "../../../../assets/images/faq.png";
import {devices} from "../../../../config/devices";

export const FAQContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${FAQImage});
    background-size: 700px;
    background-repeat: no-repeat;
    height: 600px;

    @media ${devices.tabletMax} {
        background-size: 100%;
    }
`

export const QueriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    width: 400px;
    gap: 20px;
`;
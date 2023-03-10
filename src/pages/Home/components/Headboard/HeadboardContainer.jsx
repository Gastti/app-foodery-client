import React from "react";
import styled from "styled-components";
import { devices } from "../../../../config/devices";

export const HeadboardContainer = styled.div`
  display: flex;
  flex-flow: ${props => props.column ? "column wrap" : "row wrap"};
  align-items: center;
  justify-content: flex-end;

  & > img {
    position: absolute;
    left: 0;
    width: calc(100% - 650px);
    margin-right: 50px;
    z-index: 0;

    @media ${devices.laptopMax} {
        width: calc(100% - 600px);
    } 

    @media (max-width: 935px) {
        width: calc(100% - 500px);
    }

    @media ${devices.tabletMax} {
        width: calc(100%);
        opacity: 0.2;
    }
  }
`;
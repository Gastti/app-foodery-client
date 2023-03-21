import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    flex-basis: 1;
    flex-grow: 1;
    max-width: 450px;
    padding: 15px;
    background-color:#fff;
    border-radius: 8px;
    box-shadow: 0px 0px 15px #00000027;

    & > div:nth-child(2) {
        text-align: center;
    }

    & > div:nth-child(4) {
        text-align: center;
        font-weight: 500;
        margin-bottom: 15px;
    }

    & > form {
        margin-bottom: 15px;
    }

    & > hr {
       height: 1px;
    }
`;

export default FormContainer;
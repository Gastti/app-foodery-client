import React from "react";
import styled from "styled-components";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const StyledErrorMessageContainer = styled.span`
    display: flex;
    align-items: center;
    color: red;
    font-size: 12px;
    font-weight: 600;

    & > svg {
        font-size: 15px;
        margin-right: 5px;
    }
`

export default function CustomFormError({ message, style }) {
    return (
        <StyledErrorMessageContainer style={style}>
            <ErrorOutlineIcon />
            {message}
        </StyledErrorMessageContainer>
    )
}
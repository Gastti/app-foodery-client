import React from 'react';
import styled from 'styled-components';
import { devices } from '../../config/devices';

const StyledContainer = styled.div`
    background-color: ${props => props.primary ? '#f4f4fc' : 'transparent'};
    width: 100%;
`;

const StyledContent = styled.div`
    margin: 0 auto;
    padding: ${props => props.padding ? "100px 25px" : "25px"};
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    @media ${devices.mobile} {
        width: 100%;
        max-width: 100%;
    }

    @media ${devices.desktop} {
        width: 1280px;
        max-width: 1280px;

    }
`;

export default function Container({ children, primary, style, padding }) {
    return (
        <StyledContainer primary={primary} style={style}>
            <StyledContent padding={padding}>
                {children}
            </StyledContent>
        </StyledContainer>
    )
}
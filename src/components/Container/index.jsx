import React from 'react';
import styled from 'styled-components';
import { devices } from '../../config/devices';

const StyledContainer = styled.div`
    background-color: ${props => props.primary ? '#f4f4fc' : 'transparent'};
    display: grid;
    place-items: center;
    width: 100%;
`;

const StyledContent = styled.div`
    display: ${props => props.flex ? 'flex' : ''};
    flex-direction: ${props => props.flex || ''};
    justify-content: ${props => props.justify || ''};
    align-items: ${props => props.align || ''};
    margin: 0 auto;
    padding: ${props => props.padding ? "100px 25px" : "25px 25px"};
    box-sizing: border-box;
    position: relative;

    @media ${devices.mobile} {
        width: 100%;
        max-width: 100%;
    }

    @media ${devices.desktop} {
        width: 1200px;
        max-width: 1200px;
    }
`;

export default function Container({ children, primary, substyle, style, padding, flex, align, justify }) {
    return (
        <StyledContainer primary={primary} style={style}>
            <StyledContent
                padding={padding}
                flex={flex}
                align={align}
                justify={justify}
                style={substyle}
            >
                {children}
            </StyledContent>
        </StyledContainer>
    )
}
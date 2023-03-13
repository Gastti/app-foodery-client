import React from "react";
import styled from "styled-components";

const StyledSocialButton = styled.a`
    display: flex;
    transition: all .2s;
    color: #0000005c;
    
    :hover {
        color: var(--c-primary);
    }
`;

export default function SocialButton({ href, icon }) {
    return (
        <StyledSocialButton href={href}>
            {icon}
        </StyledSocialButton>
    )
}
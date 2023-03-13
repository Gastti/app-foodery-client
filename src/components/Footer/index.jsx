import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Logo from "../Logo";
import Socials from "../Socials"
import { FOOTER_CONTENT_EN } from "../../locals/en/global.js";
import { FOOTER_CONTENT_ES } from "../../locals/es/global.js";
import { devices } from "../../config/devices";

const FooterContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 40px;

    @media ${devices.mobileMax} {
        flex-flow: row wrap;
    }
`;

const About = styled.div`
    flex-basis: 300px;
    flex-grow: 1;
    max-width: 300px;

    & > p {
        color: #0000005c;
        font-size: 1.1rem;
        font-weight: 400;
        padding: 10px 0px;
        margin-bottom: 15px;
        border-bottom: 3px solid var(--c-primary);
    }
`

const Links = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    max-width: 600px;
    gap: 40px;

    & > div > h4 {
        font-size: 1.5rem;
        font-weight: 400;
        font-family: var(--f-ubuntu);
    }

    & > div > a {
        color: #0000005c;
        font-size: 1.1rem;
        font-weight: 400;

        :not(:last-child) {
            margin-right: 15px;
        }

        :hover {
            color: var(--c-primary);
        }
    }
`;

export default function Footer({ language }) {
    const content = language == 'es-ES'
        ? FOOTER_CONTENT_ES
        : FOOTER_CONTENT_EN

    const { about, pages, services } = content;
    return (
        <Container
            primary
            padding
        >
            <FooterContainer>
                <About>
                    <Logo />
                    <p>{about.slogan}</p>
                    <Socials />
                </About>
                <Links>
                    <div>
                        <h4>{pages.title}</h4>
                        {pages.links.map((page) => {
                            return <a key={page.href} href={page.href}>{page.name}</a>
                        })}
                    </div>
                    <div>
                        <h4>{services.title}</h4>
                        {services.links.map((service) => {
                            return <a key={service.href} href={service.href}>{service.name}</a>
                        })}
                    </div>
                </Links>
            </FooterContainer>
        </Container>
    )
}
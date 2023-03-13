import React from 'react';
import styled from 'styled-components';
import SocialButton from './SocialButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
    display: flex;
    gap: 20px;
`;

export const SOCIAL_MEDIA_LINKS = [
    { name: 'Facebook', href: 'https://facebook.com/', icon: <FacebookIcon /> },
    { name: 'Twitter', href: 'https://twitter.com/', icon: <TwitterIcon /> },
    { name: 'Instagram', href: 'https://instagram.com/', icon: <InstagramIcon /> }
]

export default function Socials() {
    return (
        <Container>
            {
                SOCIAL_MEDIA_LINKS.map((social) => {
                    const { name, href, icon } = social;
                    return (
                        <SocialButton
                            key={name}
                            href={href}
                            icon={icon}
                        />
                    )
                })
            }
        </Container>
    )
}
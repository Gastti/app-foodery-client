import React from "react";
import styled from "styled-components";
import { devices } from "../../config/devices";
import YourLogo from "../../assets/images/yourlogo.png";

const Content = styled.div`
    position: relative;
    max-width: 1280px;
    margin: -60px auto;
    padding: 0px 25px;
    z-index: 1;

    & > div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        max-width: 1280px;
        background-color: #fff;
        box-shadow: 0px 0px 30px #00000022;
        border-radius: 15px;
        gap: 10px;
        padding: 30px 0px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;

    @media ${devices.tabletMax} {
        width: 80px;
        height: 80px;
    }

    @media ${devices.mobileMax} {
        width: 60px;
        height: 60px;
    }

    & > img {
        height: 100%;
        opacity: 0.3;
    }
`

export default function SponsorsSection() {
    const [brands, setBrands] = React.useState([
        { name: 'Brand 1', logo: YourLogo },
        { name: 'Brand 2', logo: YourLogo },
        { name: 'Brand 3', logo: YourLogo },
        { name: 'Brand 4', logo: YourLogo }
    ])

    return (
        <Content>
            <div>
                {
                    brands.map((brand) => {
                        return <Logo key={brand.name}><img src={brand.logo} /></Logo>
                    })
                }
            </div>
        </Content>

    )
}
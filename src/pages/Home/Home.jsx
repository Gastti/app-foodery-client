import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { FlexContainer } from "./components/FlexContainer";
import BurgerImage from "../../assets/images/burger2.png";
import SponsorsSection from "../../components/SponsorsSection";
import Headboard from "./components/Headboard";



export default function Home({ isSmallScreen }) {
    return (
        <>
            <Navbar isSmallScreen={isSmallScreen} />
            <Container primary>
                <FlexContainer>
                    <img src={BurgerImage} />
                    <Headboard />
                </FlexContainer>
            </Container>
            <SponsorsSection />
        </>
    )
}
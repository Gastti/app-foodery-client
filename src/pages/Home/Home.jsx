import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { FlexContainer } from "./components/FlexContainer";
import BurgerImage from "../../assets/images/burger.png";
import SponsorsSection from "../../components/SponsorsSection";
import Headboard from "./components/Headboard";
import StepsPage from "./components/StepsPage";
import FoodMenu from "./components/FoodMenu";

export default function Home({ isSmallScreen }) {

    return (
        <>
            <Navbar isSmallScreen={isSmallScreen} />
            <Container primary padding>
                <FlexContainer>
                    <img src={BurgerImage} />
                    <Headboard />
                </FlexContainer>
            </Container>
            {/* <SponsorsSection /> */}
            <StepsPage />
            <FoodMenu isSmallScreen={isSmallScreen}/>
        </>
    )
}
import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import { FlexContainer } from "./components/FlexContainer";
import BurgerImage from "../../assets/images/burger.png";
import Headboard from "./components/Headboard";
import StepsPage from "./components/StepsPage";
import FoodMenu from "./components/FoodMenu";

export default function Home({ isSmallScreen, isTabletScreen }) {
    return (
        <>
            <Navbar isTabletScreen={isTabletScreen} />
            <Container primary padding style={{paddingTop: '50px'}}>
                <FlexContainer>
                    <img src={BurgerImage} />
                    <Headboard />
                </FlexContainer>
            </Container>
            <StepsPage />
            <FoodMenu isSmallScreen={isSmallScreen}/>
        </>
    )
}
import React from "react";
import Navbar from "../../components/Navbar";
import StepsPage from "./components/StepsPage";
import FoodMenu from "./components/FoodMenu";
import Headboard from "./components/Headboard";

export default function Home({ isSmallScreen, isTabletScreen }) {
    return (
        <>
            <Navbar isTabletScreen={isTabletScreen} />
            <Headboard />
            <StepsPage />
            <FoodMenu isSmallScreen={isSmallScreen}/>
        </>
    )
}
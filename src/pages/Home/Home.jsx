import React from "react";
import Navbar from "../../components/Navbar";
import StepsPage from "./components/StepsPage";
import FoodMenu from "./components/FoodMenu";
import Headboard from "./components/Headboard";
import Customers from "./components/Customers";
import Articles from "./components/Articles";

export default function Home({ isSmallScreen, isTabletScreen, language }) {
    return (
        <>
            <Navbar isTabletScreen={isTabletScreen} />
            <Headboard />
            <StepsPage />
            <FoodMenu
                isTabletScreen={isTabletScreen}
                isSmallScreen={isSmallScreen}
            />
            <Customers
                isTabletScreen={isTabletScreen}
                isSmallScreen={isSmallScreen}
                language={language}
            />
            <Articles
                language={language}
            />
        </>
    )
}
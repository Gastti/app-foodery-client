import React from "react";
import Steps from "./components/Steps";
import FoodMenu from "./components/FoodMenu";
import Headboard from "./components/Headboard";
import Customers from "./components/Customers";
import Articles from "./components/Articles";
import FAQ from "./components/FAQ";
import Container from "../../components/Container";
import SubscriptionCard from "../../components/SubscriptionCard";
import Footer from "../../components/Footer";

export default function Home({ isSmallScreen, isTabletScreen, language }) {
    return (
        <>
            <Headboard />
            <Steps />
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
            <FAQ
                language={language}
            />
            <Container style={{ marginBottom: '100px' }}>
                <SubscriptionCard
                    language={language}
                />
            </Container>
            <Footer
                language={language}
            />
        </>
    )
}
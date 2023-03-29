import React, { useContext } from "react";
import Steps from "./components/Steps";
import FoodMenu from "./components/FoodMenu";
import Headboard from "./components/Headboard";
import Customers from "./components/Customers";
import Articles from "./components/Articles";
import FAQ from "./components/FAQ";
import Container from "../../components/Container";
import SubscriptionCard from "../../components/SubscriptionCard";
import Footer from "../../components/Footer";
import { ConfigContext, ConfigProvider } from "../../contexts/ConfigContext";

export default function Home() {
    const { isMobile, isTablet, language } = useContext(ConfigContext);

    return (
        <ConfigProvider>
            <Headboard />
            {/* <Steps /> */}
            {/* <FoodMenu
                isTablet={isTablet}
                isMobile={isMobile}
            /> */}
            <Customers language={language} />
            <Articles language={language} />
            <FAQ language={language} />
            <Container style={{ marginBottom: '100px' }}>
                <SubscriptionCard language={language} />
            </Container>
            <Footer language={language} />
        </ConfigProvider>
    )
}
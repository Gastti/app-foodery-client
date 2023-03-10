import React from "react";
import Container from "../../../../components/Container";
import { HeadboardContainer } from "./HeadboardContainer";
import BurgerImage from "../../../../assets/images/burger.png";
import HeadboardContent from "./HeadboardContent";

export default function Headboard() {
    return (
        <Container primary padding style={{ paddingTop: '50px' }}>
            <HeadboardContainer>
                <img src={BurgerImage} />
                <HeadboardContent />
            </HeadboardContainer>
        </Container>
    )
}
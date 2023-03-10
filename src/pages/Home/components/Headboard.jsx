import React from "react";
import Container from "../../../components/Container";
import { FlexContainer } from "./FlexContainer";
import BurgerImage from "../../../assets/images/burger.png";
import HeadboardContent from "./HeadboardContent";

export default function Headboard() {
    return (
        <Container primary padding style={{ paddingTop: '50px' }}>
            <FlexContainer>
                <img src={BurgerImage} />
                <HeadboardContent />
            </FlexContainer>
        </Container>
    )
}
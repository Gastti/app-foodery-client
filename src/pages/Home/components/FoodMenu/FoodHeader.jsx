import React from "react";
import styled from "styled-components";
import FoodNavigation from "./FoodNavigation";
import Subtitle from "../../../../components/Subtitle";
import { foodMenuContent } from "../../HomeContent";
import { devices } from "../../../../config/devices";

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${devices.mobileMax} {
        flex-direction: column;
    }

    & > div:nth-child(1) {

        p {
            font-size: 1.3rem;
            font-weight: 400;
            padding-left: 3px;
            opacity: 0.5;
            margin-bottom: 30px;
        }
    }

    & > div:nth-child(2) > button:nth-child(2) > svg {
        margin-right: -4px;
    }

`;

export default function FoodHeader({
    page,
    setPage,
    prevPage,
    nextPage,
    isTabletScreen
}) {
    return (
        <Container>
            <div>
                <Subtitle dangerouslySetInnerHTML={{ __html: foodMenuContent.title }} />
                <p>{foodMenuContent.paragraph}</p>
            </div>
            {
                !isTabletScreen &&
                <FoodNavigation
                    page={page}
                    setPage={setPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            }
        </Container>
    )
}
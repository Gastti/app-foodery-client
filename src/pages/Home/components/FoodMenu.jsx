import React from "react";
import styled from "styled-components";
import { devices, size } from "../../../config/devices";
import { foodMenuContent } from "../HomeContent";
import Container from "../../../components/Container";
import Subtitle from "../../../components/Subtitle";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FoodList from "../components/FoodList"
import { useProducts } from "../../../utils/useProducts";
import { useMediaQuery } from "react-responsive";

const Header = styled.div`
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

    & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        gap: 30px;

        & > button:nth-child(2) > svg {
            margin-right: -4px;
        }
    }

    & > div:nth-child(2) > button:nth-child(2) > svg {
        margin-right: -4px;
    }

`

const NavigationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.primary ? "var(--c-primary)" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#222222"};
    box-shadow: inset 5px 5px 15px #ffffff41, 0px 0px 15px #0000001f;
    border: none;
    border-radius: 10px;
    width: 55px;
    height: 55px;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export default function FoodMenu({ isSmallScreen }) {
    const { nextPage, prevPage, maxPages } = useProducts();
    const [page, setPage] = React.useState(1);
    const isTabletScreen = useMediaQuery({ maxWidth: size.tablet });

    return (
        <Container>
            <Header>
                <div>
                    <Subtitle dangerouslySetInnerHTML={{ __html: foodMenuContent.title }} />
                    <p>{foodMenuContent.paragraph}</p>
                </div>
                {
                    !isTabletScreen &&
                    <div>
                        <NavigationButton onClick={() => prevPage(page, setPage)}>
                            <ArrowBackIosNewIcon />
                        </NavigationButton>
                        <NavigationButton primary disabled={page == maxPages} onClick={() => nextPage(page, setPage)}>
                            <ArrowForwardIosIcon />
                        </NavigationButton>
                    </div>
                }
            </Header>
            <FoodList
                isSmallScreen={isSmallScreen}
                page={page}
            />
            {
                isTabletScreen &&
                <div style={{display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px'}}>
                    <NavigationButton onClick={() => prevPage(page, setPage)}>
                        <ArrowBackIosNewIcon />
                    </NavigationButton>
                    <NavigationButton primary disabled={page == maxPages} onClick={() => nextPage(page, setPage)}>
                        <ArrowForwardIosIcon />
                    </NavigationButton>
                </div>
            }
        </Container>
    )
}
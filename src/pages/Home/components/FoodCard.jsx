import React from "react";
import styled from "styled-components";
import { devices } from "../../../config/devices";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    background-image: ${props => `url('${props.image}')`};
    background-size: 300px;
    background-position: center;
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    & h5 {
        color: #fff;
        z-index: 1;
        margin-left: 20px;
        font-size: 1.3rem;
        font-weight: 400;

        & > span {
            color: var(--c-primary);
        }
    }

    ::before {
        content: "";
        width: 100%;
        height: 150px;
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(32,199,233,0) 100%);
        opacity:1;
        bottom: 0px;
    }

    & > img {
        position: absolute;
    }

    @media (max-width: 1136px) {
        width: 250px;
    }

    @media (max-width: 865px) {
        width: 100%;
        height: 160px;
        background-size: 100%;
        margin-left: 30px;
    }

    @media ${devices.tabletMax} {
        width: 250px;
        height: 250px;
        margin-left: 0px;
    }

    @media (max-width: 619px) {
        width: 100%;
    }

    @media ${devices.mobileMax} {
        width: 100%;
    }
`;

const Button = styled.button`
    z-index: 1;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all .3s;

    :hover {
        letter-spacing: 1px;
    }
    :hover svg{
        transform: translate(10px);
    }
`;

export default function FoodCard({ name, price, image }) {
    return (
        <Container image={image}>
            <h5>{name}</h5>
            <h5><span>$</span>{price}</h5>
            <Button>Order Now{<ArrowForwardIosIcon />}</Button>
        </Container>
    )
}
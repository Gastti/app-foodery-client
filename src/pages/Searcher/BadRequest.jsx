import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/Subtitle';
import SearchIcon from '@mui/icons-material/Search';

export default function BadRequest() {
    return (
        <BadRequestContainer>
            <SearchIcon />
            <div>
                <Subtitle>Type in the &search& &engine& what you want to find.</Subtitle>
                <ul>
                    <li>Type your search in the field at the top of the screen.</li>
                    <li>Browse product categories to find the product you are looking for.</li>
                </ul>
            </div>
        </BadRequestContainer>
    )
}

const BadRequestContainer = styled.div`
    background-color: #fff;
    border-radius: 15px;
    padding: 40px;
    display: flex;
    flex-flow: row wrap;

    @media (max-width: 500px) {
        background-color: transparent;
        padding: 0px;
        flex-flow: column wrap;
        align-items: center;
    }

    @media (max-width: 765px) {
        justify-content: center;
    }

    & > svg {
        color: #e8e8e8;
        font-size: 8rem;
        margin-right: 40px;
        flex-basis: 200px;

        @media (max-width: 500px) {
            flex-basis: auto;
            margin-right: 0px;
            color: #00000014;
        }
    }

    & > div {
        flex-basis: 0;
        flex-grow: 1;
        min-width: 395px;

        @media (max-width: 500px) {
            min-width: auto;
        }
    }

    & > div > h2 {
        font-size: 2rem;
    }

    & > div > ul {
        margin-left: 20px;
    }
`
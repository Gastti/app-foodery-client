import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/Subtitle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function NoResults({ slug }) {
    return (
        <NoResultsContainer>
            <CancelIcon />
            <div>
                <Subtitle>Could not find results.</Subtitle>
                <ul>
                    <li>Try to search for the product with another name.</li>
                    <li>Take a look at the catalog to find a similar product.</li>
                </ul>
            </div>
        </NoResultsContainer>
    )
}

const NoResultsContainer = styled.div`
    background-color: #fff;
    border-radius: 15px;
    padding: 40px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 500px) {
        background-color: transparent;
        padding: 0px;
        flex-flow: column wrap;
        align-items: center;
    }

    @media (max-width: 692px) {
        justify-content: center;
    }

    & > svg {
        color: #e8e8e8;
        font-size: 8rem;
        margin-right: 40px;

        @media (max-width: 500px) {
            margin-right: 0px;
            color: #00000014;
        }
    }

    & > div > h2 {
        font-size: 2rem;
    }

    & > div > ul {
        margin-left: 20px;
    }
`
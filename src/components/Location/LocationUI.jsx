import React from 'react';
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const LocationUIContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 5px;
    top: -25px;

    & > p > span {
        font-weight: 500;
        font-size: 0.8rem;

        :last-child {
            color: #ababab;
            margin-left: 5px;
        }
    }

    & > button {
        background-color: transparent;
        border: none;
        color: #242424;
        display: flex;
        margin: 0px 5px;
        margin-top: 2px;
        cursor: pointer;

        & > svg {
            font-size: 1rem;
        }
    }
`;

export default function LocationUI() {
    return (
        <LocationUIContainer>
            <button>
                <LocationOnOutlinedIcon />
            </button>
            <p>
                <span>My Location:</span>
                <span>Down Town Brooklyn, str 29, box 14</span>
            </p>
            <button>
                <ModeEditOutlineOutlinedIcon />
            </button>
        </LocationUIContainer>
    )
}

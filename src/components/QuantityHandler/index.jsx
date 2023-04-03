import React, { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SquareButton from '../SquareButton';

export default function QuantityHandler({ quantity, setQuantity }) {

    const handleQuantity = (e) => {
        const { value } = e.target;
        if (value < 1) {
            setQuantity(1);
        } else {
            setQuantity(Number(value));
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <QuantityHandlerContainer>
            <SquareButton
                onClick={handleDecrease}
                icon={<RemoveIcon />}
            />
            <input
                type="number"
                value={quantity}
                onChange={handleQuantity}
            />
            <SquareButton
                onClick={handleIncrease}
                icon={<AddIcon />}

            />
        </QuantityHandlerContainer>
    )
}

const QuantityHandlerContainer = styled.div`
    display: flex;
    flex-direction: row;

    & > input::-webkit-outer-spin-button,
    & > input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    & > input {
        -moz-appearance: textfield; /* para Firefox */
        text-align: center;
        max-width: 40px;
        background-color: #f3f3f3;
        padding: 8.5px 0px;
        border: 1px solid #e6e6e6;
        border-radius: 6px;
        color: #222;
        font-size: 1rem;
    }
`
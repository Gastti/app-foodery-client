import React, { useState } from 'react';
import QuantityHandler from '../QuantityHandler';
import SquareButton from '../SquareButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from 'styled-components';

export default function AddToCart({ id, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <AddToCartStyled>
            <QuantityHandler quantity={quantity} setQuantity={setQuantity} />
            <SquareButton onClick={() => addToCart(id, quantity)} primary icon={<AddShoppingCartIcon />}></SquareButton>
        </AddToCartStyled>
    )
}

const AddToCartStyled = styled.div`
    display: flex;
    flex-direction: row;

`
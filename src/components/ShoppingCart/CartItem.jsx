import styled from 'styled-components';
import Divider from '../Divider';
import SquareButton from '../SquareButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItem({ name, category, image, price, quantity, id }) {
    return (
        <CartItemContainer>
            <div><img src={image} alt={name} /></div>
            <div><p>{name}</p></div>
            <div>
                <SquareButton icon={<AddIcon />} />
                <span>{quantity}</span>
                <SquareButton icon={<RemoveIcon />} />
            </div>
            <div><p>${price}</p></div>
        </CartItemContainer>
    )
}

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #eaeaea;

    & > div {
        flex-basis: 0;
        flex-grow: 1;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;

        & > p {
            font-size: 1rem;
            font-weight: 500;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        & > span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 35px;
            height: 35px;
            background-color: #f3f3f3;
            padding: 5px 10px;
            border: 1px solid #e6e6e6;
            border-radius: 6px;
        }
    }

    & > div:nth-child(2) {
        flex-basis: 0;
        flex-grow: 3;
        padding-left: 10px;
        aspect-ratio: 3/1;
        justify-content: flex-start;
    }
`

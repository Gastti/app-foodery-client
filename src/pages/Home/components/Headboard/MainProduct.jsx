import Button from '../../../../components/Button'
import styled from 'styled-components';
import Subtitle from '../../../../components/Subtitle';
import { devices } from '../../../../config/devices';

export default function MainProduct({ product }) {
    const { image, name, desc, price } = product;
    return (
        <MainProductContainer>
            <div className='product-info'>
                <h2>{name}</h2>
                <h1>Wait a minute for delicious.</h1>
                <p>{desc}</p>
                <div className='product-info-order'>
                    <Button color='primary'>Order Now</Button>
                    <p>
                        PRICE
                        <span>${price}</span>
                    </p>
                </div>
            </div>
            <div className='product-image-mobile'>
                <img src={image} />
            </div>
            <div className='product-image'>
                <img src={image} />
            </div>
        </MainProductContainer>
    )
}


const MainProductContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 20px;
    position: relative;

    @media (max-width: 750px) {
        display: none;
    }


    & > div.product-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-basis: 0;
        flex-grow: 1;
        min-width: 250px;
        z-index: 2;

        & > h1 {
            font-size: 4rem;
            font-weight: 500;

            @media ${devices.tabletMax} {
                font-size: 3rem;
            }
        }

        & > h2 {
            font-size: 2rem;
            font-weight: 500;
            font-style: italic;
            color: var(--c-primary);

            @media ${devices.tabletMax} {
                font-size: 1.5rem;
            }
        }

        & > p {
            font-size: 1.3rem;
            font-weight: 300;
            opacity: 0.8;
            margin: 15px 0px;
        }

        & > div.product-info-order {
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 2;
        }

        & > div.product-info-order > p {
            display: flex;
            flex-direction: column;
            font-size: 0.8rem;
            font-weight: 500;
            color: #00000041;
            letter-spacing: 3px;
            line-height: 12px;
        }

        & > div.product-info-order > p > span {
            font-size: 1.5rem;
            color: #242424;
            letter-spacing: normal;
            line-height: 20px;
            ::first-letter  {
                color: var(--c-primary);
            }
        }
    }

    & > div.product-image-mobile {
            display: none;
            flex-basis: 0;
            flex-grow: 1;
            width: 100%;
            border-radius: 15px;
            margin-top: 10px;
            position: absolute;
            max-width: 300px;
            z-index: 1;
            opacity: 0.2;

            & > img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            @media (max-width: 500px) {
            display: block;
        }
        }

    & > div.product-image {
        flex-basis: 0;
        flex-grow: 1;
        min-width: 280px;
        border-radius: 15px;
        overflow: hidden;

        & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        @media (max-width: 500px) {
            display: none;
        }
    }
`;
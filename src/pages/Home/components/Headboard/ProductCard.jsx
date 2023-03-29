import styled from 'styled-components';

export default function ProductCard({ image, name, description, price, onClick }) {
    return (
        <ProductCardContainer onClick={onClick}>
            <div>
                <h4>{name}</h4>
                <span>{price}</span>
            </div>
            <div className='subproduct-image'><img src={image} /></div>
        </ProductCardContainer>
    )
}

const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 0;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 20px;
    max-width: 250px;
    padding: 10px;

    & > div.subproduct-image {
        width: 200px;

        img {
            width: 100%;
        }
    }
`
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    & > div.popular-foods-navigation-mobile {
        display: none;
        margin: 20px auto;

        @media (max-width: 440px) {
            display: block;
        }
    }

    div.popular-foods-navigation-desktop {
        @media (max-width: 440px) {
            display: none;
        }
    }

    div.popular-foods-navigation {
        button {
            padding: 10px;
            border-radius: 15px;
            border: none;
            margin-left: 10px;
            transition: all .2s;

            :first-child {
                background-color: #fff;
                color: #222222;
            }

            :last-child {
                background-color: var(--c-primary);
                background: var(--g-primary);

                :hover {
                    background: var(--g-primary-h);
                }
            }

            :hover {
                transform: scale(1.1);
            }

            :active {
                transform: scale(1);
            }
        }
    }
`;

export const SliderHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    & > h2 {
        font-size: 2rem;
    }
`

export const SliderBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
`;

export const SliderItemStyled = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    min-height: 280px;
    display: flex;
    flex-direction: column;

    div:nth-child(1) {
        width: 100%;
        height: 150px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    & > div.item-body {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;

        & > h3 {
            font-weight: 400;
        }

        & > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0px;

            p {
                font-weight: 500;
                color: rgba(0, 0, 0, 0.255);

                span {
                    color: #222222;
                    font-size: 1.2rem;
                }
            }

            button {
                padding: 5px;
                border-radius: 15px;
                border: none;
                margin-left: 10px;
                transition: all .2s;
                background-color: var(--c-primary);
                background: var(--g-primary);
            
                :hover {
                    transform: scale(1.1);
                    background: var(--g-primary-h);
                }

                :active {
                    transform: scale(1);
                }
            }
        }

        @media (max-width: 440px) {
            & > h3 {
                font-size: 1rem;
            }
        }
    }

`

function SliderItem({ data }) {
    return (
        <SliderItemStyled>
            <div>
                <img src={data?.image} alt={data?.name} />
            </div>
            <div className="item-body">
                <h3>{data?.name}</h3>
                <div>
                    <p>
                        PRICE
                        <br />
                        <span>${data?.price}</span>
                    </p>
                    <button><AddIcon /></button>
                </div>
            </div>
        </SliderItemStyled >
    )
}

export { SliderItem }
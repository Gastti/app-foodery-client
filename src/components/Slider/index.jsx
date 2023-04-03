import React, { useEffect } from 'react';
import { SliderBody, SliderHeader, SliderItem, StyledContainer } from './components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCart } from '../../hooks/useCart';

export default function Slider({ title, items }) {
    const [min, setMin] = React.useState(0);
    const [itemsToShow, setItemsToShow] = React.useState(4);
    const { addToCart } = useCart();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 410) {
                setItemsToShow(2);
            } else if (window.innerWidth < 700) {
                setItemsToShow(2)
            } else if (window.innerWidth < 900) {
                setItemsToShow(3)
            } else {
                setItemsToShow(4);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const handlePrev = () => {
        setMin(prevMin => {
            if (prevMin <= 0) {
                return items.length - itemsToShow;
            } else {
                return prevMin - 1;
            }
        })
    }

    const handleNext = () => {
        setMin(prevMin => {
            if (prevMin >= items.length - itemsToShow) {
                return 0;
            } else {
                return prevMin + 1;
            }
        });
    };

    return (
        <StyledContainer>
            <SliderHeader>
                <h2>{title}🔥</h2>
                <div className='popular-foods-navigation popular-foods-navigation-desktop'>
                    <button onClick={handlePrev}><ArrowBackIosNewIcon /></button>
                    <button onClick={handleNext}><ArrowForwardIosIcon /></button>
                </div>
            </SliderHeader>
            <SliderBody>
                {items?.slice(min, min + itemsToShow)
                    .map(item => (
                        <SliderItem
                            key={item.name}
                            data={item}
                            addToCart={addToCart}
                        />
                    ))
                }
            </SliderBody>
            <div className='popular-foods-navigation popular-foods-navigation-mobile'>
                <button onClick={handlePrev}><ArrowBackIosNewIcon /></button>
                <button onClick={handleNext}><ArrowForwardIosIcon /></button>
            </div>
        </StyledContainer >
    )
}

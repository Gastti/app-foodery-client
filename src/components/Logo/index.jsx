import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
    background-color: var(--c-primary);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: var(--f-ubuntu);
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    border-radius: 15px 0px 15px 0px;
`

const Name = styled.span`
    font-family: var(--f-ubuntu);
    font-size: 1.5rem;   
    font-weight: 600;
    color: #222222;
    position: relative;

    &::after, ::before {
        content: ")";
        color: var(--c-primary);
        font-size: 10px;
        font-family: var(--f-playfair);
        font-weight: 700;
        position: absolute;
        transform: rotateZ(-90deg);
        top: 3px;
        left: 19px;
    }

    &::before {
        left: 33px;
    }
`

export default function Logo() {
    return (
        <div className="flex-row flex-align-center" style={{ gap: '10px' }}>
            <Icon><span style={{ lineHeight: '45px', marginLeft: '-5px' }}>F</span></Icon>
            <Name>Foodery.</Name>
        </div>
    )
}
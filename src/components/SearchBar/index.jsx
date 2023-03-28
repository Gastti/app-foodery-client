import React from 'react'
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
    display: flex;
    min-width: 350px;
    max-width: 500px;
    position: relative;

    & > input {
        width: 100%;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.0);
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
        padding: 14px;
        padding-right: 44px;
        border-radius: 14px;
        font-size: 1rem;
        color: #242424;
        font-weight: 400;
        font-family: var(--f-ubuntu);

        ::placeholder {
            color: rgba(0, 0, 0, 0.2);
        }
    }

    & > button {
        display: flex;
        padding: 10px;
        position: absolute;
        right: 0px;
        top: 2px;
        color: rgba(0, 0, 0, 0.12);
        cursor: pointer;
        background-color: transparent;
        border: none;
        transition: all .3s;

        :hover {
            color: rgba(0, 0, 0, 0.2);
        }
    }
`

export default function SearchBar() {
    return (
        <Container>
            <input type="text" placeholder='What food you want?' />
            <button><SearchOutlinedIcon /></button>
        </Container>
    )
}

import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const UserMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    cursor: pointer;

    & > span {
        color: var(--c-primary);
        font-weight: 500;
    }
`

export default function UserMenuUI({ avatar, name }) {
    return (
        <UserMenuContainer>
            {/* <span>{name}</span> */}
            <Avatar image={avatar} />
        </UserMenuContainer>
    )
}

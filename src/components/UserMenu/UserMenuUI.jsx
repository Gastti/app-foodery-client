import React from 'react';
import styled from 'styled-components';
import { USER_NAVIGATION_OPTIONS_EN } from '../../locals/en/global';
import { USER_NAVIGATION_OPTIONS_ES } from '../../locals/es/global';
import { useConfig } from '../../contexts/ConfigContext';
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../services/auth';

export default function UserMenuUI({ avatar, name, opened, handleClick }) {
    const { isMobile, language } = useConfig();
    const { logout } = useAuth();
    const USER_NAVIGATION = language == 'es-ES'
        ? USER_NAVIGATION_OPTIONS_ES
        : USER_NAVIGATION_OPTIONS_EN;

    return (
        <UserMenuContainer>
            <Avatar image={avatar} onClick={handleClick} />
            {(opened && !isMobile) &&
                <UserNavigation>
                    {USER_NAVIGATION.map((option, index) => (
                        <NavLink key={option.label} to={option.to} onClick={handleClick}>
                            <option.icon />
                            {option.label}
                        </NavLink>
                    ))}
                    <a onClick={logout}><LogoutIcon />Logout</a>
                </UserNavigation>
            }
        </UserMenuContainer>
    )
}

const UserMenuContainer = styled.div`
    position: relative;
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

const UserNavigation = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 280px;
    background-color: #fff;
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.08);
    padding-bottom: 5px;
    border-radius: 10px;
    top: 55px;
    right: 0px;

    & > a {
        display: flex;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #e8e8e8;
        color: #242424;
        font-weight: 400;
        font-size: 0.9rem;

        :hover {
            background-color: #f6f6f6;
        }

        & > svg {
            margin-right: 10px;
            color: #e1e1e1;
        }
    }
`
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfig } from '../../contexts/ConfigContext';
import UserMenuUI from './UserMenuUI';

export default function UserMenu({ avatar, name }) {
    const [opened, setOpened] = useState(false);
    const { isMobile } = useConfig();
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("click", setOpened(false));

        return () => {
            document.removeEventListener("click", setOpened(false));
        };
    }, []);

    const handleOpened = () => {
        if (isMobile) {
            navigate('/profile')
        } else {
            setOpened(!opened)
        }
    }

    return (
        <UserMenuUI
            avatar={avatar}
            name={name}
            opened={opened}
            handleClick={handleOpened}
        />
    )
}
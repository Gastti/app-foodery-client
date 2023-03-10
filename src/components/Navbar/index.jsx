import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Logo from '../Logo';
import Button from '../Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '../Menu';
import { useSpring } from '@react-spring/web';
import { MenuContainer } from './MenuContainer';

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 10;
    background-color: #ffffffcc;
    padding: 10px;
    border-radius: 10px;
`

const CloseButton = styled.button`
    background-color: var(--c-primary);
    color: #fff;
    cursor: pointer;
    width: 100%;
    border: none;
    padding: 15px;
    position: absolute;
    bottom: 0;
`

export default function Navbar({ isTabletScreen }) {
    const [springs, api] = useSpring(() => ({
        from: { height: '0vh' },
        config: { duration: 500 }
    }))

    const [state, setState] = useState({
        isActive: false,
    })

    const handleMenu = () => {
        setState({
            ...state,
            isActive: !state.isActive
        });

        api.start({
            from: {
                height: state.isActive ? "100vh" : "0vh"
            },
            to: {
                height: state.isActive ? "0vh" : "100vh"
            },
        });
    }

    return (
        <Container
            style={{ position: 'fixed', zIndex: 10 }}
        >
            <Content>
                <a href='/'><Logo /></a>
                <div className="navbar-navigation flex-row flex-align-center" style={{ gap: '10px' }}>
                    {!isTabletScreen && <Menu />}
                    {
                        isTabletScreen &&
                        <Button
                            icon={<MenuIcon />}
                            onClick={handleMenu}
                            primary
                        />
                    }
                </div>
            </Content>
            {
                state.isActive &&
                <MenuContainer style={springs}>
                    <Menu />
                    <CloseButton
                        onClick={handleMenu}
                    >
                        {<CloseIcon />}
                    </CloseButton>
                </MenuContainer>
            }
        </Container>
    );
}
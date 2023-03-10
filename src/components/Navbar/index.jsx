import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Logo from '../Logo';
import Button from '../Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '../Menu';
import { animated, useSpring } from '@react-spring/web';

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 10;
`

const MenuContainer = styled(animated.div)`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: fixed;
    background-color: #ffffff22;
    backdrop-filter: blur(5px);
    width: 100%;
    top: 0;
    left: 0;
    z-index: 12;
    overflow: hidden;

    & > ul {
        flex-flow: column wrap;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        gap: 0px;
    }

    & > ul > li {
        width: 100%;
    }

    & > ul > li > a {
        display: block;
        width: 100%;
        background-color: #fff;
        padding: 15px 0px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.5rem;
        transition: all .2s;
    }

    & > ul > button {
        display: block;
        width: 100%;
        padding: 15px 0px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.5rem;
        transition: all .2s;
        border-radius: 0px;
    }

    & > ul > li > a:hover {
        background-color: var(--c-primary);
        color: #fff;
    }
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


export default function Navbar({ isSmallScreen }) {
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
                    {!isSmallScreen && <Menu />}
                    {
                        isSmallScreen &&
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
import React, { useState } from 'react';
import styled from 'styled-components';
// import Container from '../Container';
import Logo from '../Logo';
import Button from '../Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from './Navigation';
import { useSpring } from '@react-spring/web';
import { MenuContainer } from './MenuContainer';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    border-bottom: 1px solid #00000012;
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 10;
    background-color: #fff;
    padding: 15px 25px;
`

const CloseButton = styled.button`
    background: linear-gradient(90deg, rgba(255,107,0,1) 20%, #ff9100 100%);
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
        <Container>
            <Content>
                <NavLink to='/'><Logo /></NavLink>
                <div className="navbar-navigation flex-row flex-align-center" style={{ gap: '10px' }}>
                    {!isTabletScreen && <Navigation handleMenu={handleMenu} />}
                    {
                        isTabletScreen &&
                        <Button
                            icon={<MenuIcon />}
                            onClick={handleMenu}
                            color='primary'
                        />
                    }
                </div>
            </Content>
            {
                state.isActive &&
                <MenuContainer style={springs}>
                    <Navigation handleMenu={handleMenu} />
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
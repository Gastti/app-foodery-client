import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const NavbarUIContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    border-bottom: 1px solid #00000012;
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    top: 0;
`
const NavbarUIContent = styled.div`
    flex-grow: 1;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 10;
    background-color: #fff;
    padding: 15px 10px;
    height: 100px;
`
function NavbarUI({ children }) {
    return (
        <NavbarUIContainer>
            <NavbarUIContent>
                <NavLink to='/'><Logo /></NavLink>
                {children}
            </NavbarUIContent>
        </NavbarUIContainer>
    )
}

export { NavbarUI };
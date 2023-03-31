import React from 'react';
import PortalReactDom from 'react-dom';
import styled from 'styled-components';

export default function Modal({ children }) {
    return PortalReactDom.createPortal(
        <ModalBackground>
            {children}
        </ModalBackground>
        , document.getElementById('modal'));
}

const ModalBackground = styled.div`
    position:fixed;
    width: 100%;
    height: 100vh;
    z-index: 15;
    top: 0;
`
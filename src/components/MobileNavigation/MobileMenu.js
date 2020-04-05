import React from 'react';
import styled from 'styled-components';
import { PORTFOLIO, CONTACT, ABOUT, SERVICES } from '../../utils/urlRoutes';
import NavLink from '../navigation/NavILink';

const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.primary};
    height: 100vh;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(200%)')};
    width: 100%;
`;

const LinkCointainer = styled.ul`
    display: flex;
    flex-direction: column;
    & > * {
        padding: ${({ theme }) => theme.space[0]};
    }
    position: absolute;
    top: 15%;
`;

const MobileMenu = ({ open, setOpen }) => {
    return (
        <NavigationWrapper open={open}>
            <nav>
                <div>
                    <LinkCointainer open={open} onClick={() => setOpen(!open)}>
                        <NavLink url={PORTFOLIO.path} link="Portfolio" />
                        <NavLink url={ABOUT.path} link="Om Oss" />
                        <NavLink url={SERVICES.path} link="Tjenester" />
                        <NavLink url={CONTACT.path} link="Kontakt" />
                    </LinkCointainer>
                </div>
            </nav>
        </NavigationWrapper>
    );
};

export default MobileMenu;

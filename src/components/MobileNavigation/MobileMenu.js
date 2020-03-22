import React from 'react';
import styled from 'styled-components';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO } from '../../utils/urlRoutes';
import NavLink from '../navigation/NavILink';

const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.primary};
    height: calc(100vh - 80px);
    position: absolute;
    top: 80px;
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
                        <NavLink url={SERVICES.path} link="Tjenster" />
                        <NavLink url={ABOUT.path} link="Om Oss" />
                        <NavLink url={VIDEO.path} link="Video" />
                    </LinkCointainer>
                </div>
            </nav>
        </NavigationWrapper>
    );
};

export default MobileMenu;

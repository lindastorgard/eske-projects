import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO, LANDING_PAGE } from '../utils/urlRoutes';
import NavLink from './navigation/NavILink';
import Logo from './Logo';

const NavigationWrapper = styled.nav`
    width: 250px;
    height: 100%;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    overflow-x: hidden;
`;

const LinkCointainer = styled.ul`
    display: flex;
    flex-direction: column;
    & > * {
        padding: ${({ theme }) => theme.space[0]};
    }
    position: absolute;
    bottom: 10%;
`;

const StyledIcon = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.space[4]};
    padding-left: ${({ theme }) => theme.space[4]};
`;

const DesktopNavigation = () => {
    return (
        <NavigationWrapper>
            <nav>
                <StyledIcon>
                    <Link to={LANDING_PAGE.path}>
                        <Logo />
                    </Link>
                </StyledIcon>
                <div>
                    <LinkCointainer>
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

export default DesktopNavigation;

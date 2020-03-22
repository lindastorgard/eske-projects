import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO, LANDING_PAGE } from '../utils/urlRoutes';
import NavLink from './navigation/NavILink';
import Logo from './Logo';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

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
    padding-left: ${({ theme }) => theme.space[2]};
    & > * {
        padding: ${({ theme }) => theme.space[0]};
    }
    position: absolute;
    bottom: ${({ theme }) => theme.space[6]};
`;

const StyledLogo = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.space[2]};
    padding-left: ${({ theme }) => theme.space[3]};
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: ${({ theme }) => theme.space[2]};
    padding-left: ${({ theme }) => theme.space[2]};
`;

const DesktopNavigation = () => {
    return (
        <NavigationWrapper>
            <StyledLogo>
                <Link to={LANDING_PAGE.path}>
                    <Logo />
                </Link>
            </StyledLogo>
            <div>
                <LinkCointainer>
                    <NavLink url={PORTFOLIO.path} link="Portfolio" />
                    <NavLink url={SERVICES.path} link="Tjenster" />
                    <NavLink url={ABOUT.path} link="Om Oss" />
                    <NavLink url={VIDEO.path} link="Video" />
                </LinkCointainer>
                <IconContainer>
                    <a href="/">
                        <FacebookIcon />
                    </a>
                    <a href="/">
                        <InstagramIcon />
                    </a>
                </IconContainer>
            </div>
        </NavigationWrapper>
    );
};

export default DesktopNavigation;

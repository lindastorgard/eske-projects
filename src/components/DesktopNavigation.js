import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO, LANDING_PAGE } from '../utils/urlRoutes';
import NavLink from './navigation/NavILink';
import Logo from './Logo';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';

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
    padding-left: ${({ theme }) => theme.space[3]};
    & > * {
        padding: ${({ theme }) => theme.space[0]};
    }
    position: absolute;
    bottom: ${({ theme }) => theme.space[7]};
`;

const StyledLogo = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.space[4]};
    padding-left: ${({ theme }) => theme.space[4]};
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: ${({ theme }) => theme.space[4]};
    padding-left: ${({ theme }) => theme.space[4]};
`;

const StyledIcon = styled.img`
    height: ${({ theme }) => theme.space[1]};
    padding-right: ${({ theme }) => theme.space[1]};
`;

const DesktopNavigation = () => {
    return (
        <NavigationWrapper>
            <nav>
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
                            <StyledIcon src={facebookIcon} alt="instagram" />
                        </a>
                        <a href="/">
                            <StyledIcon src={instagramIcon} alt="instagram" />
                        </a>
                    </IconContainer>
                </div>
            </nav>
        </NavigationWrapper>
    );
};

export default DesktopNavigation;

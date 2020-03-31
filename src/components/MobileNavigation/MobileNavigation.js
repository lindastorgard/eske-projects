import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { LANDING_PAGE } from '../../utils/urlRoutes';
import Logo from '../Logo';

const NavigationWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 90px;
    ${({ theme }) => theme.sm`
        height: ${({ theme }) => theme.space[8]};
    `};
    background-color: ${({ theme }) => theme.primary};
    z-index: 6;
`;

const StyledLogo = styled.div`
    position: absolute;
    top: 0;
    left: calc(50% - 64px / 2);
    ${({ theme }) => theme.sm`
        left: calc(50% - 74px / 2);
    `};
    padding: ${({ theme }) => theme.space[0]} 0;
    z-index: 6;
`;

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <NavigationWrapper>
            <StyledLogo>
                <Link to={LANDING_PAGE.path} open={open} onClick={() => setOpen(false)}>
                    <Logo />
                </Link>
            </StyledLogo>
            <Hamburger open={open} setOpen={setOpen} />
            <MobileMenu open={open} setOpen={setOpen} />
        </NavigationWrapper>
    );
};

export default MobileNavigation;

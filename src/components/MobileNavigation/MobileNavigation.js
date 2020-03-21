import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { LANDING_PAGE } from '../../utils/urlRoutes';
import Logo from '../Logo';

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    z-index: ${({ open }) => (open ? '5' : '1')};
`;

const StyledLogo = styled.div`
    padding: ${({ theme }) => theme.space[0]};
`;

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <StyledLogo>
                    <Link to={LANDING_PAGE.path}>
                        <Logo />
                    </Link>
                </StyledLogo>

                <Hamburger open={open} setOpen={setOpen} />
            </div>
            <Navigation open={open}>
                <MobileMenu open={open} setOpen={setOpen} />
            </Navigation>
        </>
    );
};

export default MobileNavigation;

import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { LANDING_PAGE } from '../../utils/urlRoutes';

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    z-index: ${({ open }) => (open ? '5' : '1')};
`;

const MobileNavigation = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* <div>
                <Link to={LANDING_PAGE.path}>Eskelogo</Link>
            </div> */}
            <div>
                <Hamburger open={open} setOpen={setOpen} />
            </div>
            <Navigation open={open}>
                <MobileMenu open={open} />
            </Navigation>
        </>
    );
};

export default MobileNavigation;

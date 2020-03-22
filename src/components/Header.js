import React from 'react';
import styled from 'styled-components';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { ShowAt, HideAt } from 'react-with-breakpoints';

const StyledHeader = styled.header`
    // position: fixed;
    // z-index: 200;
`;

const Header = () => {
    return (
        <StyledHeader>
            <HideAt breakpoint="mediumAndBelow">
                <DesktopNavigation />
            </HideAt>
            <ShowAt breakpoint="mediumAndBelow">
                <MobileNavigation />
            </ShowAt>
        </StyledHeader>
    );
};
export default Header;

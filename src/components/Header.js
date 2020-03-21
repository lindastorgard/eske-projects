import React from 'react';
import styled from 'styled-components';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { ShowAt, HideAt } from 'react-with-breakpoints';

const StyledHeader = styled.header`
    position: relative;
`;

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <HideAt breakpoint="small">
                    <DesktopNavigation />
                </HideAt>
                <ShowAt breakpoint="small">
                    <MobileNavigation />
                </ShowAt>
            </StyledHeader>
        </div>
    );
};
export default Header;

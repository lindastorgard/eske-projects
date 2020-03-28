import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { ShowAt, HideAt } from 'react-with-breakpoints';

const Header = () => {
    return (
        <>
            <HideAt breakpoint="largeAndBelow">
                <DesktopNavigation />
            </HideAt>
            <ShowAt breakpoint="largeAndBelow">
                <MobileNavigation />
            </ShowAt>
        </>
    );
};
export default Header;

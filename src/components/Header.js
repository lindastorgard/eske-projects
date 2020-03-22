import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { ShowAt, HideAt } from 'react-with-breakpoints';

const Header = () => {
    return (
        <>
            <HideAt breakpoint="mediumAndBelow">
                <DesktopNavigation />
            </HideAt>
            <ShowAt breakpoint="mediumAndBelow">
                <MobileNavigation />
            </ShowAt>
        </>
    );
};
export default Header;

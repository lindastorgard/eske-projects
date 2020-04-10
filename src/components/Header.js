import React from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';

const Header = () => {
    return (
        <>
            <DesktopNavigation />
            <MobileNavigation />
        </>
    );
};
export default Header;

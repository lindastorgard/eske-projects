import React from 'react';
import styled from 'styled-components';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { ShowAt } from 'react-with-breakpoints';

const StyledHeader = styled.header``;

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <ShowAt breakpoint="mediumAndAbove">
                    <DesktopNavigation />
                </ShowAt>
                <ShowAt breakpoint="small">
                    <MobileNavigation />
                </ShowAt>
            </StyledHeader>
        </div>
    );
};
export default Header;

/* {landingpage[0].acf.gallery.map(({ url, id }) => {
    return (
        <div key={id}>
            <img src={url} alt="..." />
        </div>
    );
})} */

//     return (
//                 <div>
//                     {/* <HideAt breakpoint="small">
//                         <div>Hello World!</div>
//                     </HideAt> */}
//                     <StyledH3>I'm Landing Page</StyledH3>
//                 </div>
//     );
// }

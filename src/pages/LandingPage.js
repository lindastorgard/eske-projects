import React from 'react';
import useApi from '../hooks/useApi';
// import styled from 'styled-components';
import Slideshow from '../components/Slideshow';

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();

    return (
        <div>
            {isLoading ? (
                <p>Loading</p>
            ) : error ? (
                <p>{error}</p>
            ) : landingpage ? (
                <div>
                    <Slideshow landingpage={landingpage} />
                </div>
            ) : null}
        </div>
    );
};
export default LandingPage;

/* {landingpage[0].acf.gallery.map(({ url, id }) => {
    return (
        <div key={id}>
            <img src={url} alt="..." />
        </div>
    );
})} */

//     return (
//         <BreakpointsProvider breakpoints={breakpoints}>
//             <ThemeProvider theme={theme}>
//                 <div>
//                     {/* <HideAt breakpoint="small">
//                         <div>Hello World!</div>
//                     </HideAt> */}
//                     <StyledH3>I'm Landing Page</StyledH3>
//                 </div>
//             </ThemeProvider>
//         </BreakpointsProvider>
//     );
// }

// let x;
// if (landingpage) {
//     x = landingpage.reduce((acc, val) => {
//         console.log(val.acf);
//         acc.push(val.acf);
//         return acc;
//     }, []);
// }
// console.log(x);

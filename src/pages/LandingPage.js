import React from 'react';
import useApi from '../hooks/useApi';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { StyledH3 } from '../styles/typography';
import { BreakpointsProvider } from 'react-with-breakpoints';
import { arrowFunctionExpression } from '@babel/types';
// import { HideAt } from 'react-with-breakpoints';

const breakpoints = {
    small: 468,
    medium: 768,
    large: 1024,
    xlarge: Infinity,
};

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();
    let x;
    if (landingpage) {
        x = landingpage.reduce((acc, val) => {
            console.log(val.acf);
            acc.push(val.acf);
            return acc;
        }, []);
    }
    console.log(x);

    return (
        <div>
            <p>Hello Landing Page</p>
            {isLoading ? (
                <p>Loading</p>
            ) : error ? (
                <p>{error}</p>
            ) : landingpage ? (
                <div>
                    {/* {landingpage[0].acf.gallery.map(({url, id})=> {
                  
                      return(
                        <p key={id}>{url}</p>
                      )
                    })} */}
                </div>
            ) : null}
        </div>
    );
};
export default LandingPage;

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

import React from 'react';
import useApi from '../../hooks/useApi';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { StyledH3 } from '../../styles/typography';
import { BreakpointsProvider } from 'react-with-breakpoints';
// import { HideAt } from 'react-with-breakpoints';

const breakpoints = {
    small: 468,
    medium: 768,
    large: 1024,
    xlarge: Infinity,
};

function About() {
    const { data } = useApi();
    if (data) {
        console.log(data);
    }
    return (
        <BreakpointsProvider breakpoints={breakpoints}>
            <ThemeProvider theme={theme}>
                <div>
                    {/* <HideAt breakpoint="small">
                        <div>Hello World!</div>
                    </HideAt> */}
                    <StyledH3>I'm Om oss</StyledH3>
                </div>
            </ThemeProvider>
        </BreakpointsProvider>
    );
}

export default About;

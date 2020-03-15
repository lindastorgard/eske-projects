import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH3 } from '../styles/typography';

function About() {
    const { data } = useApi();
    if (data) {
        // console.log(data);
    }
    return (
        <div>
            <StyledH3>I'm Om oss</StyledH3>
        </div>
    );
}

export default About;

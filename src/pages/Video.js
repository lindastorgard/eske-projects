import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH3 } from '../styles/typography';

function Video() {
    const { data } = useApi();
    if (data) {
        // console.log(data);
    }
    return (
        <div>
            {/* <HideAt breakpoint="small">
                        <div>Hello World!</div>
                    </HideAt> */}
            <StyledH3>I'm Video</StyledH3>
        </div>
    );
}

export default Video;

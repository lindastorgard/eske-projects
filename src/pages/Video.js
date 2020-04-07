import React from 'react';

import styled from 'styled-components';

const VideoContainer = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
`;

const Video = () => {
    return (
        <div>
            <VideoContainer autoPlay loop muted playsInline>
                <source src="https://eskeprosjekt.no/video/tapet.mp4" type="video/mp4" />
            </VideoContainer>
        </div>
    );
};

export default Video;

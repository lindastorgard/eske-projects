import React from 'react';
import kitchen from '../assets/kitchen.png';
import { PORTFOLIO } from '../utils/urlRoutes';
import { Link } from 'react-router-dom';
import { StyledH2 } from '../styles/typography';

import styled from 'styled-components';

const HeaderTextContainer = styled.div`
    position: absolute;
    z-index: 100;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h2 {
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.fontSizes[5]};
        text-transform: uppercase;
    }
`;

const StyledButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes[3]};
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: transparent;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
`;
const Overlay = styled.div`
    /* opacity: 0.6;
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%; */
`;

const VideoContainer = styled.video`
    z-index: 10;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
`;

const Video = () => {
    return (
        <div>
            <Link to={PORTFOLIO.path} link="Portfolio">
                <HeaderTextContainer>
                    <StyledH2>Eske Prosjekt er forlengelsen av designuniverset Eske Interiør </StyledH2>
                    <StyledButton>Kom inn</StyledButton>
                </HeaderTextContainer>
            </Link>
            <Overlay>
                <VideoContainer autoPlay loop muted playsInline poster={kitchen}>
                    <source src="https://eskeprosjekt.no/video/tapet.mp4" type="video/mp4" />
                </VideoContainer>
            </Overlay>
        </div>
    );
};

export default Video;

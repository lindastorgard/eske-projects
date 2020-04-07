import React from 'react';
import styled from 'styled-components';
import kitchen from '../assets/kitchen.png';
import { PORTFOLIO } from '../utils/urlRoutes';
import { Link } from 'react-router-dom';
import { StyledH2 } from '../styles/typography';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-attachment: scroll;
    overflow: hidden;

    video {
        min-width: 100%;
        min-height: 100%;
        position: relative;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.4;
`;

const HeaderTextContainer = styled.div`
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h2 {
        color: ${({ theme }) => theme.primary};
        font-size: ${({ theme }) => theme.fontSizes[3]};
        text-transform: uppercase;
        width: 350px;
        margin-bottom: ${({ theme }) => theme.space[3]};

        ${({ theme }) => theme.sm`
          font-size: ${({ theme }) => theme.fontSizes[5]};
          width: 700px;
        `}
        ${({ theme }) => theme.lg`
          font-size: ${({ theme }) => theme.fontSizes[5]};
        `}
    }
`;

const StyledButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: transparent;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    &:hover {
        background: ${({ theme }) => theme.secondary};
    }
    ${({ theme }) => theme.sm`
        font-size: ${({ theme }) => theme.fontSizes[3]};
    `}
`;

const LandingPage = () => {
    return (
        <Container>
            <Link to={PORTFOLIO.path} link="Portfolio">
                <HeaderTextContainer>
                    <StyledH2>Eske Prosjekt er forlengelsen av designuniverset Eske Interiør </StyledH2>
                    <StyledButton>Kom inn</StyledButton>
                </HeaderTextContainer>
            </Link>
            <Overlay />
            <video autoPlay loop muted playsInline poster={kitchen}>
                <source src="https://eskeprosjekt.no/video/eskeny.mp4" type="video/mp4" />
            </video>
        </Container>
    );
};
export default LandingPage;

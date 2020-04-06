import React from 'react';
import useApi from '../hooks/useApi';
import setScroll from '../hooks/setScroll';
import styled from 'styled-components';
import Slideshow from '../components/Slideshow';
import CircleLoader from '../components/CircleLoader';
import { StyledParagraph } from '../styles/typography';
import { PORTFOLIO } from '../utils/urlRoutes';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    height: calc(100vh - 80px);
    margin-top: 80px;
    ${({ theme }) => theme.sm`
        margin-top: 88px;
        height: calc(100vh - 88px);
    `};
    ${({ theme }) => theme.lg`
        margin-top: 0px;
        margin-left: 200px;
        height: 100vh
    `};
`;

// const Parent = styled.div`
//     position: relative;
// `;

const StyledButton = styled.button`
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.primary};
    opacity: 0.6;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
`;

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();
    setScroll();

    return (
        <Container>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : landingpage ? (
                <>
                    <Link to={PORTFOLIO.path} link="Portfolio">
                      {/* <Parent> */}
                          <StyledButton>Velkommen</StyledButton>
                      {/* </Parent> */}
                    </Link>
                    <Slideshow landingpage={landingpage} />
                </>
            ) : null}
        </Container>
    );
};
export default LandingPage;

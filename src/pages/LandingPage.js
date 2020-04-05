import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import Slideshow from '../components/Slideshow';
import CircleLoader from '../components/CircleLoader';
import { StyledParagraph } from '../styles/typography';

const Container = styled.div`
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

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();

    return (
        <Container>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : landingpage ? (
                <Slideshow landingpage={landingpage} />
            ) : null}
        </Container>
    );
};
export default LandingPage;

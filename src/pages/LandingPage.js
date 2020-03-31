import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import Slideshow from '../components/Slideshow';
import CircleLoader from '../components/CircleLoader';
import { StyledParagraph } from '../styles/typography';

const Container = styled.div`
    margin-top: 80px;
    ${({ theme }) => theme.sm`
        margin-top: 88px;
    `};
    ${({ theme }) => theme.lg`
        margin-top: 0px;
        margin-left: 200px;
    `};
`;

const LandingPage = () => {
    const { landingpage, error, isLoading } = useApi();

    return (
        <div>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : landingpage ? (
                <Container>
                    <Slideshow landingpage={landingpage} />
                </Container>
            ) : null}
        </div>
    );
};
export default LandingPage;

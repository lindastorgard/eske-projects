import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import Slideshow from '../components/Slideshow';

const Container = styled.div`
    margin-top: 80px;
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
                <p>Loading</p>
            ) : error ? (
                <p>{error}</p>
            ) : landingpage ? (
                <Container>
                    <Slideshow landingpage={landingpage} />
                </Container>
            ) : null}
        </div>
    );
};
export default LandingPage;

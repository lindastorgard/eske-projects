import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledLargeH2, StyledParagraph } from '../styles/typography';
import { Link } from 'react-router-dom';
import { PROJECT_WITH_CATEGORY } from '../utils/urlRoutes';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import { HideAt, ShowAt } from 'react-with-breakpoints';
import ScrollMemory from 'react-router-scroll-memory';
import Footer from '../components/Footer';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, calc(50vh - 56px));
    grid-gap: ${({ theme }) => theme.space[0]};
    overflow: hidden;
    margin-top: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.lg`
		grid-template-columns: repeat(2, 1fr);
        grid-template-rows: calc(100vh - 72px) 30px;
        margin-right: ${({ theme }) => theme.space[1]}; 
	`};
`;
const FooterWrapper = styled.div`
    ${({ theme }) => theme.lg`
	    grid-column: 2 / 3;
    `};
`;

const Title = styled(StyledLargeH2)`
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
    text-align: center;
`;

const CategorySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${props => `url(${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    &:first-of-type {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    &:nth-of-type(2) {
        grid-column: 1/2;
    }
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        width: 100%;
    }
    ${({ theme }) => theme.lg`
		&:first-of-type {
            grid-column: 1/2;
        }
        &:nth-of-type(2) {
            grid-column: 2/3;
        }
	`};
`;

const Portfolio = () => {
    const { categories, error, isLoading } = useApi();
    if (categories) {
        categories.sort((a, b) => a.id - b.id);
    }

    return (
        <Layout>
            <ScrollMemory />
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : categories ? (
                <Container>
                    <HideAt breakpoint="largeAndAbove">
                        {categories.map(({ acf }) => (
                            <CategorySection key={acf.image} image={acf.image_mobile}>
                                <Link to={`${PROJECT_WITH_CATEGORY.getPathWithId(acf.slug)}`}>
                                    <Title>{acf.category_name}</Title>
                                </Link>
                            </CategorySection>
                        ))}
                    </HideAt>
                    <ShowAt breakpoint="largeAndAbove">
                        {categories.map(({ acf }) => (
                            <CategorySection key={`unique${acf.image}`} image={acf.image}>
                                <Link to={`${PROJECT_WITH_CATEGORY.getPathWithId(acf.slug)}`}>
                                    <Title>{acf.category_name}</Title>
                                </Link>
                            </CategorySection>
                        ))}
                    </ShowAt>
                    <FooterWrapper>
                        <Footer />
                    </FooterWrapper>
                </Container>
            ) : null}
        </Layout>
    );
};
export default Portfolio;

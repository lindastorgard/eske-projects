import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledH1 } from '../styles/typography';
import useLocalState from '../hooks/useLocalState';
import { Link } from 'react-router-dom';
import { PROJECT_WITH_CATEGORY } from '../utils/urlRoutes';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50vh);
    grid-gap: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.sm`
		  grid-template-columns: repeat(2, 1fr);
		  grid-template-rows: 100vh;
		  grid-gap: ${({ theme }) => theme.space[2]};
		`};
`;

const Title = styled(StyledH1)`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.primary};
`;

const CategorySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        ${props => `url(${props.image}) no-repeat center`};
    &:first-of-type {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    &:nth-of-type(2) {
        grid-column: 1/2;
    }
    ${({ theme }) => theme.sm`
		  &:first-of-type {
        grid-column: 1/2;
    }
    &:nth-of-type(2) {
        grid-column: 2/3;
    }
		`};
`;

const ButtonWrapper = styled.button`
    background: transparent;
    border: none;
`;

const Portfolio = () => {
    const { categories, error, isLoading } = useApi();
    const [categoryFilter, setCategoryFilter] = useLocalState('category');

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}...</p>
            ) : categories ? (
                <Container>
                    {categories.map(({ acf }) => {
                        console.log(acf.category_name);
                        return (
                            <CategorySection key={acf.image.id} image={acf.image.url}>
                                <Link to={`${PROJECT_WITH_CATEGORY.getPathWithId(acf.slug)}`}>
                                    <ButtonWrapper onClick={() => setCategoryFilter(acf.slug)}>
                                        <Title>{acf.category_name}</Title>
                                    </ButtonWrapper>
                                </Link>
                            </CategorySection>
                        );
                    })}
                </Container>
            ) : null}
        </div>
    );
};
export default Portfolio;

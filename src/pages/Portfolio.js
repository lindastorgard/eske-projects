import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledLargeH2 } from '../styles/typography';
import { Link } from 'react-router-dom';
import { PROJECT_WITH_CATEGORY } from '../utils/urlRoutes';

const Container = styled.div`
    margin-left: 0;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, calc(50vh - 40px));
    grid-gap: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.sm`
		  grid-template-columns: repeat(2, 1fr);
		  grid-template-rows: 100vh;
          grid-gap: ${({ theme }) => theme.space[2]};
          margin-left: 250px;
          margin-top: 0;
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
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        ${props => `url(${props.image}) no-repeat center`};
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
        &:hover {
            background: rgba(0, 0, 0, 0.4);
        }
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

const Portfolio = () => {
    const { categories, error, isLoading } = useApi();

    return (
        <Container>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}...</p>
            ) : categories ? (
                <>
                    {categories.map(({ acf }) => {
                        console.log(acf.category_name);
                        return (
                            <CategorySection key={acf.image.id} image={acf.image.url}>
                                <Link to={`${PROJECT_WITH_CATEGORY.getPathWithId(acf.slug)}`}>
                                    <Title>{acf.category_name}</Title>
                                </Link>
                            </CategorySection>
                        );
                    })}
                </>
            ) : null}
        </Container>
    );
};
export default Portfolio;

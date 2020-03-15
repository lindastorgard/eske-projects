import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { StyledLargeH2 } from '../styles/typography';

const Container = styled.div`
    margin-left: 0;
    ${({ theme }) => theme.xs`
        margin-left: 250px;
	`};
`;

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    ${({ theme }) => theme.xs`
        flex-direction: row;
    `};
`;

const Title = styled(StyledLargeH2)`
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.primary};
`;

const CategorySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({ theme }) => theme.space[0]};
    width: 100%;
    height: 280px;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        ${props => `url(${props.image}) no-repeat center`};
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
        width: 45%;
    `};
    ${({ theme }) => theme.md`
        width: 30%;
    `};
`;

const Projects = () => {
    const param = useParams();
    const { category, error, isLoading } = useApi(param.category);
    console.log(category);

    return (
        <Container>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}...</p>
            ) : category ? (
                <StyledSection>
                    {category.map(project => {
                        const { acf } = project;
                        return (
                            <CategorySection key={project.id} image={acf.image[0].url}>
                                <Link to={`/`}>
                                    <Title>{acf.title}</Title>
                                </Link>
                            </CategorySection>
                        );
                    })}
                </StyledSection>
            ) : null}
        </Container>
    );
};
export default Projects;

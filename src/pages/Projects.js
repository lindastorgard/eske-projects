import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { StyledLargeH2 } from '../styles/typography';
import { PROJECT_WITH_ID } from '../utils/urlRoutes';
import Layout from '../components/Layout';

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.sm`
        grid-template-columns: repeat(2, minmax(0, 1fr));
    `};
    ${({ theme }) => theme.md`
        grid-template-columns: repeat(3, minmax(0, 1fr));
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
    width: 100%;
    height: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${props => `url(${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        width: 100%;
    }
`;

const Projects = () => {
    const param = useParams();
    const { category, error, isLoading } = useApi(param.category);
    console.log(param.category);
    return (
        <Layout>
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
                                <Link to={`${PROJECT_WITH_ID.getPathWithId(param.category, project.id)}`}>
                                    <Title>{acf.title}</Title>
                                </Link>
                            </CategorySection>
                        );
                    })}
                </StyledSection>
            ) : null}
        </Layout>
    );
};
export default Projects;

import React, { useEffect, useCallback } from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { StyledH2, StyledParagraph } from '../styles/typography';
import { PROJECT_WITH_ID } from '../utils/urlRoutes';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import ScrollToTopButton from '../components/ScrollToTopButton';

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 4px;
    ${({ theme }) => theme.sm`
        grid-template-columns: repeat(2, minmax(0, 1fr));
    `};
    ${({ theme }) => theme.md`
        grid-template-columns: repeat(3, minmax(0, 1fr));
    `};
    ${({ theme }) => theme.lg`    
      margin-top: ${({ theme }) => theme.space[1]};
      margin-right: ${({ theme }) => theme.space[1]};
    `};
`;

const Title = styled(StyledH2)`
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.primary};
    margin: ${({ theme }) => theme.space[1]};
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
    const setLocalStorage = useCallback((prev, next) => {
        if (prev && prev >= 0 && next < category.length) {
            localStorage.setItem('previousIndex', prev);
            localStorage.setItem('nextIndex', next);
        } else {
            localStorage.setItem('previousIndex', 0);
            localStorage.setItem('nextIndex', category.length - 1);
        }
    });
    useEffect(() => {
        if (category) {
            setLocalStorage(0, 0);
        }
    }, [category, setLocalStorage]);
    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : category ? (
                <StyledSection>
                    {category.map((project, index) => {
                        const { acf } = project;
                        return (
                            <>
                                <CategorySection key={project.id} image={acf.featured_image}>
                                    <Link
                                        to={`${PROJECT_WITH_ID.getPathWithId(param.category, project.id)}`}
                                        onClick={() => setLocalStorage(index - 1, index + 1)}
                                    >
                                        <Title>{acf.title}</Title>
                                    </Link>
                                </CategorySection>
                                <ScrollToTopButton />
                            </>
                        );
                    })}
                </StyledSection>
            ) : null}
        </Layout>
    );
};
export default Projects;

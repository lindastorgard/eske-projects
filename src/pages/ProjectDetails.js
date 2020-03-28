import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import BackButton from '../components/BackButton';
import { StyledH1, StyledParagraph } from '../styles/typography';
import { HideAt } from 'react-with-breakpoints';

const SectionContainer = styled.section`
    ${({ theme }) => theme.sm`  
        margin-bottom: ${({ theme }) => theme.space[5]}   
    `};
    ${({ theme }) => theme.lg`
    display: flex;
    & > * {
        flex: 1;
    }
    article {
        margin-top: 100px;
    }
    margin-bottom: ${({ theme }) => theme.space[5]}     
    `};
`;

const Header = styled(StyledH1)`
    margin-top: 120px;
    ${({ theme }) => theme.lg` 
     margin-top: ${({ theme }) => theme.space[6]};
    `};
`;

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.sm`
         grid-template-columns: repeat(3, 1fr);
	`};
`;
const ImageWrapper = styled.div`
    grid-column: span 1;
    min-height: 100px;
    &:nth-of-type(5n + 5) {
        grid-column: 1 / 3;
    }
    ${({ theme }) => theme.sm`
        grid-column: span 1;
        min-height: 300px;
        &:nth-of-type(5n + 5) {
          grid-column: 2 / 4;
        }
	`};
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Dash = styled.span`
    display: inline-block;
    width: ${({ theme }) => theme.space[2]};
    height: 1px;
    background-color: ${({ theme }) => theme.secondary};
    margin: 4px ${({ theme }) => theme.space[1]};
`;

const ProjectsDetails = () => {
    const { id, category } = useParams();
    const { project, error, isLoading, categories } = useApi('', id);

    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <p>{error}...</p>
            ) : project && categories ? (
                <>
                    <SectionContainer>
                        <div>
                            <HideAt breakpoint="largeAndBelow">
                                <BackButton>
                                    {category === 'residential'
                                        ? categories[1].acf.category_name
                                        : categories[0].acf.category_name}
                                </BackButton>
                            </HideAt>
                            <Header>{project[0].acf.title}</Header>
                        </div>
                        <article>
                            <StyledParagraph>
                                {project[0].acf.customer}
                                <Dash />
                                {project[0].acf.location}
                            </StyledParagraph>
                            <StyledParagraph>{project[0].acf.description}</StyledParagraph>
                        </article>
                    </SectionContainer>

                    <GalleryWrapper>
                        {project[0].acf.image.map(({ url, id, title }) => (
                            <ImageWrapper key={id}>
                                <Image src={url} alt={title} />
                            </ImageWrapper>
                        ))}
                    </GalleryWrapper>
                </>
            ) : null}
        </Layout>
    );
};
export default ProjectsDetails;

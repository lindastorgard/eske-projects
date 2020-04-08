import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import BackButton from '../components/BackButton';
import { StyledH1, StyledParagraph } from '../styles/typography';
import { HideAt } from 'react-with-breakpoints';
import FsLightbox from 'fslightbox-react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollMemory from 'react-router-scroll-memory';

const SectionContainer = styled.section`
    margin-bottom: ${({ theme }) => theme.space[2]};
    ${({ theme }) => theme.lg`
    display: flex;
    & > * {
        flex: 1;
    }
    article {
        margin-top: 100px;
    }   
    `};
`;

const Header = styled(StyledH1)`
    margin-top: 120px;
    text-transform: uppercase;
    ${({ theme }) => theme.lg` 
     margin-top: ${({ theme }) => theme.space[6]};
    `};
`;

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 4px;
    ${({ theme }) => theme.sm`
         grid-template-columns: repeat(3, 1fr);
	`};
`;
const ImageWrapper = styled.div`
    grid-column: span 1;
    overflow: hidden;
    max-height: 250px;
    cursor: pointer;
    &:nth-of-type(5n + 5) {
        grid-column: 1 / 3;
    }
    ${({ theme }) => theme.sm`
        grid-column: span 1;
        max-height: 360px;
        &:nth-of-type(5n + 5) {
          grid-column: 2 / 4;
        }
	`};
    ${({ theme }) => theme.lg`
        max-height: 480px;
	`};
`;

const Image = styled.img`
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

const FlexParent = styled.div`
    display: flex;
    padding-top: ${({ theme }) => theme.space[3]};
    width: 100%;
    ${({ theme }) => theme.md`
        width: 70%;
    `};
    ${({ theme }) => theme.lg`
        width: 85%;
	`};
`;

const Column = styled.div`
    width: 90px;
    padding: ${({ theme }) => theme.space[0]};
    ${StyledParagraph} {
        text-align: center;
    }
    &:first-of-type {
        padding-left: 0;
    }
`;

const ColorCircle = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: ${props => props.color};
    ${({ theme }) => theme.lg`
        width: 80px;
        height: 80px;
    `};
`;

const ProjectsDetails = () => {
    const { id, category } = useParams();
    const { project, error, isLoading, categories } = useApi('', id);
    const [toggler, setToggler] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const urlList = [];

    useEffect(() => {
        if (project) {
            console.log(project);
            project[0].acf.image.forEach(({ url }) => {
                urlList.push(url);
            });
        }
    }, [project, urlList]);

    const toggleLightbox = index => {
        setLightboxIndex(index);
        setToggler(!toggler);
    };

    return (
        <Layout>
            <ScrollMemory />
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : project && categories ? (
                <>
                    <ScrollToTopButton />
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
                            <FlexParent>
                                {project[0].acf.colors
                                    ? Object.keys(project[0].acf.colors).map(color => (
                                          <Column>
                                              <ColorCircle
                                                  color={project[0].acf.colors[color].color_code_}
                                              ></ColorCircle>
                                              <StyledParagraph>
                                                  {project[0].acf.colors[color].color_name}
                                              </StyledParagraph>
                                          </Column>
                                      ))
                                    : null}
                            </FlexParent>
                        </article>
                    </SectionContainer>
                    <GalleryWrapper>
                        {project[0].acf.image.map(({ url, id, title }, index) => (
                            <ImageWrapper key={id}>
                                <Image onClick={() => toggleLightbox(index)} src={url} alt={title} />
                            </ImageWrapper>
                        ))}
                    </GalleryWrapper>
                    <FsLightbox
                        toggler={toggler}
                        sourceIndex={lightboxIndex}
                        customSources={project[0].acf.image.map(({ url, id, title }) => (
                            <Image src={url} alt={title} />
                        ))}
                    />
                </>
            ) : null}
        </Layout>
    );
};
export default ProjectsDetails;

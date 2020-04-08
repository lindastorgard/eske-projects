import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import BackButton from '../components/BackButton';
import { StyledH1, StyledParagraph, StyledH2 } from '../styles/typography';
import { HideAt } from 'react-with-breakpoints';
import FsLightbox from 'fslightbox-react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ScrollMemory from 'react-router-scroll-memory';
import { PROJECT_WITH_ID } from '../utils/urlRoutes';

const SectionContainer = styled.section`
    margin-bottom: ${({ theme }) => theme.space[2]};
    ${({ theme }) => theme.lg`
     margin-top: ${({ theme }) => theme.space[1]};
     margin-right: ${({ theme }) => theme.space[5]};
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
        margin-right: ${({ theme }) => theme.space[1]};
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

const FlexColumn = styled.div`
    flex: 1;
`;

const ProjectsDetails = () => {
    const { id, category: paramCategory } = useParams();
    const { project, category, error, isLoading, categories } = useApi(paramCategory, id);
    const [projectContent, setProjectContent] = useState();
    const [toggler, setToggler] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const [previousIndex, setPreviousIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);

    useEffect(() => {
        if (id) {
            setProjectContent(project);
        }
    }, [id, project]);

    useEffect(() => {
        if (category && project) {
            const currentIndex = category.findIndex(p => p.id === project[0].id);

            if (currentIndex > 0 && currentIndex < category.length - 1) {
                setPreviousIndex(currentIndex - 1);
                setNextIndex(currentIndex + 1);
            } else if (currentIndex === category.length - 1) {
                setPreviousIndex(currentIndex - 1);
            } else if (currentIndex === 0) {
                setNextIndex(currentIndex + 1);
                setPreviousIndex(category.length - 1);
            }
        }
    }, [categories, category, nextIndex, previousIndex, project]);

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
            ) : projectContent && categories ? (
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
                            <Header>{projectContent[0].acf.title}</Header>
                        </div>
                        <article>
                            <StyledParagraph>
                                {projectContent[0].acf.customer}
                                <Dash />
                                {projectContent[0].acf.location}
                            </StyledParagraph>
                            <StyledParagraph>{projectContent[0].acf.description}</StyledParagraph>
                            <FlexParent>
                                {projectContent[0].acf.colors
                                    ? Object.keys(projectContent[0].acf.colors).map(color => (
                                          <Column key={color}>
                                              <ColorCircle
                                                  color={projectContent[0].acf.colors[color].color_code_}
                                              ></ColorCircle>
                                              <StyledParagraph>
                                                  {projectContent[0].acf.colors[color].color_name}
                                              </StyledParagraph>
                                          </Column>
                                      ))
                                    : null}
                            </FlexParent>
                        </article>
                    </SectionContainer>
                    <GalleryWrapper>
                        {projectContent[0].acf.image.map(({ url, id, title }, index) => (
                            <ImageWrapper key={id}>
                                <Image onClick={() => toggleLightbox(index)} src={url} alt={title} />
                            </ImageWrapper>
                        ))}
                    </GalleryWrapper>
                    <FsLightbox
                        toggler={toggler}
                        sourceIndex={lightboxIndex}
                        customSources={projectContent[0].acf.image.map(({ url, title }) => (
                            <Image src={url} alt={title} />
                        ))}
                    />
                    {category ? (
                        <SectionContainer>
                            <StyledH2>Flere prosjekt</StyledH2>
                            <FlexParent>
                                <FlexColumn>
                                    <Link
                                        to={`${PROJECT_WITH_ID.getPathWithId(
                                            paramCategory,
                                            category[previousIndex].id,
                                        )}`}
                                    >
                                        <Image
                                            src={category[previousIndex].acf.featured_image}
                                            alt="previous project"
                                        />
                                        <StyledParagraph>{category[previousIndex].acf.title}</StyledParagraph>
                                    </Link>
                                </FlexColumn>
                                <FlexColumn>
                                    <Link
                                        to={`${PROJECT_WITH_ID.getPathWithId(paramCategory, category[nextIndex].id)}`}
                                    >
                                        <Image src={category[nextIndex].acf.featured_image} alt="next project" />
                                        <StyledParagraph>{category[nextIndex].acf.title}</StyledParagraph>
                                    </Link>
                                </FlexColumn>
                            </FlexParent>
                        </SectionContainer>
                    ) : null}
                </>
            ) : null}
        </Layout>
    );
};
export default ProjectsDetails;

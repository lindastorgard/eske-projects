import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { StyledLargeH2, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import FsLightbox from 'fslightbox-react';

const GridContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    ${({ theme }) => theme.sm`
    grid-template-rows: repeat(5, auto);
     `};
`;

const FlexParent = styled.section`
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.sm`
        flex-direction: row;
    `};
`;

const ReverseRow = styled(FlexParent)`
    flex-direction: column-reverse;
    padding: 0;
    ${({ theme }) => theme.sm`
        flex-direction: row;
    `};
`;

const StyledSection = styled.section`
    text-align: center;
    max-width: 750px;
    margin: ${({ theme }) => theme.space[4]} auto;
`;

const IframeWrapper = styled.div`
    overflow: hidden;
    /* Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
`;

const Column = styled.div`
    flex: 1;
    align-self: center;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    article {
        text-align: center;
        padding: ${({ theme }) => theme.space[4]};
        ul {
            text-align: left;
        }
    }
    ${IframeWrapper} {
        &:nth-of-type(2) {
            margin-top: ${({ theme }) => theme.space[1]};
        }
    }
`;

const SectionHeader = styled(StyledLargeH2)`
    display: inline-block;
    border-bottom: 1px solid black;
    margin-top: 0;
    padding: ${({ theme }) => theme.space[1]} 0;
`;

const HeroImage = styled.div`
    background: ${props => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    grid-column: 1/2;
    ${({ theme }) => theme.sm`
      height: 450px;
    `};
`;

const AlignCenter = styled.div`
    ${({ theme }) => theme.sm`
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    `};
`;

const About = () => {
    const { isLoading, error, aboutpage } = useApi();
    const [aboutContent, setAboutContent] = useState(null);

    useEffect(() => {
        if (aboutpage) {
            setAboutContent(aboutpage[0].acf);
        }
    }, [aboutpage]);

    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : aboutContent ? (
                <GridContainer>
                    <HeroImage src={aboutContent.hero_image} />
                    <StyledSection>
                        <StyledLargeH2>{aboutContent.om_oss.title}</StyledLargeH2>
                        {aboutContent.om_oss.text.map(text => (
                            <StyledParagraph>{text.textrow}</StyledParagraph>
                        ))}
                    </StyledSection>
                    <ReverseRow>
                        <Column>
                            <article>
                                <SectionHeader>{aboutContent.var_filosofi.title}</SectionHeader>
                                {aboutContent.var_filosofi.text.map(text => (
                                    <StyledParagraph>{text.textrow}</StyledParagraph>
                                ))}
                            </article>
                        </Column>
                        <Column>
                            <img src={aboutContent.var_filosofi.image} alt={aboutContent.var_filosofi.title} />
                        </Column>
                    </ReverseRow>
                    <FlexParent>
                        <Column>
                            {Object.keys(aboutContent.inspiration.videos).map(url => (
                                <IframeWrapper key={url}>
                                    <iframe
                                        title="eskeinterior"
                                        src={aboutContent.inspiration.videos[url]}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </IframeWrapper>
                            ))}
                        </Column>
                        <Column>
                            <article>
                                <SectionHeader>{aboutContent.inspiration.title}</SectionHeader>
                                {aboutContent.inspiration.text.map(text => (
                                    <StyledParagraph>{text.textrow}</StyledParagraph>
                                ))}
                            </article>
                        </Column>
                    </FlexParent>
                </GridContainer>
            ) : null}
        </Layout>
    );
};

export default About;

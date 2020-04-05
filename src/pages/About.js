import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { StyledLargeH2, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import FsLightbox from 'fslightbox-react';
import PlayButton from '../components/icons/PlayButton';

const PageWrapper = styled.div`
    text-align: center;
`;

const FlexParent = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: ${({ theme }) => theme.space[6]};
    ${({ theme }) => theme.sm`
        padding-bottom: ${({ theme }) => theme.space[4]};
        padding-top ${({ theme }) => theme.space[3]};
        flex-direction: row;
    `};
`;

const Column = styled.div`
    flex: 1;
`;

const IframeWrapper = styled.div`
    overflow: hidden;
    // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
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

const Overlay = styled.div`
    &:hover {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #000;
        opacity: 0.5;
        z-index: 1;
    }
`;

const StyledPlayIcon = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
    margin: 0 auto;
`;

const HeroImage = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    background: ${props => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    margin: ${({ theme }) => theme.space[3]} 0;
    ${({ theme }) => theme.md`
        margin: ${({ theme }) => theme.space[1]} 0;
    `};
`;

const StyledImage = styled.img`
    max-height: 450px;
    width: 100%;
    object-fit: cover;
`;

const Iframe = styled.iframe`
    width: 100vw;
`;

const About = () => {
    const { isLoading, error, aboutpage } = useApi();
    const [aboutContent, setAboutContent] = useState(null);
    const [toggler, setToggler] = useState(false);
    console.log(aboutContent);
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
                <PageWrapper>
                    <HeroImage onClick={() => setToggler(!toggler)} src={aboutContent.hero_image}>
                        <Overlay></Overlay>
                        <StyledPlayIcon>
                            <PlayButton />
                        </StyledPlayIcon>
                    </HeroImage>
                    <div>
                        <StyledLargeH2>{aboutContent.om_oss.title}</StyledLargeH2>
                        <StyledParagraph>{aboutContent.om_oss.text}</StyledParagraph>
                    </div>
                    <FlexParent>
                        <Column>
                            <StyledLargeH2>{aboutContent.var_filosofi.title}</StyledLargeH2>
                            <StyledParagraph>{aboutContent.var_filosofi.text}</StyledParagraph>
                        </Column>
                        <Column>
                            <StyledImage src={aboutContent.var_filosofi.image} alt={aboutContent.var_filosofi.title} />
                        </Column>
                    </FlexParent>
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
                                    ></iframe>
                                </IframeWrapper>
                            ))}
                        </Column>
                        <Column>
                            <StyledLargeH2>{aboutContent.inspiration.title}</StyledLargeH2>
                            <StyledParagraph>{aboutContent.inspiration.text}</StyledParagraph>
                        </Column>
                    </FlexParent>
                    <FsLightbox
                        toggler={toggler}
                        customSources={[
                            <Iframe
                                title="eskeinterior"
                                height="600px"
                                width="100vw"
                                src="https://www.youtube.com/embed/FQT3FzxNaio?rel=0&amp;autoplay=1&mute=1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></Iframe>,
                        ]}
                    />
                </PageWrapper>
            ) : null}
        </Layout>
    );
};

export default About;

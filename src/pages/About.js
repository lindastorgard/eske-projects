import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { StyledLargeH2, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';

const FlexParent = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: ${({ theme }) => theme.space[6]};
    ${({ theme }) => theme.sm`
        padding-bottom: ${({ theme }) => theme.space[4]};
        padding-top ${({ theme }) => theme.space[4]};
        flex-direction: row;
        &:nth-child(odd) {
          flex-direction: row-reverse;
        }
    `};
`;

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    // height: 350px;
    // overflow: hidden;
    ${({ theme }) => theme.xs`
        // height: 500px;
    `};
    ${({ theme }) => theme.sm`
        flex: 1;
        // height: 300px;
        margin: 36px 40px 0 40px;
    `};
    ${({ theme }) => theme.lg`
        flex: 1;
        // height: 450px;
    `};
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 450px;
    object-fit: cover;
    object-position: center;
`;

const TextContainer = styled.div`
    ${({ theme }) => theme.sm`
    flex: 1;
    margin: 0 40px 0 40px;
    `};
    ${({ theme }) => theme.lg`
    flex: 1;
    margin: 0 40px 0 40px;
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

    function createIFrame(param) {
        return {
            __html: param,
        };
    }
    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : aboutContent ? (
                <>
                    <iframe
                        title="eskeinterior"
                        height="600px"
                        width="1200px"
                        src="https://www.youtube.com/embed/FQT3FzxNaio?rel=0&amp;autoplay=1&mute=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <div>
                        {Object.keys(aboutContent).map(section => (
                            <FlexParent>
                                <ImageContainer>
                                    <StyledImage src={aboutContent[section].image} alt="interior" />
                                </ImageContainer>
                                <TextContainer>
                                    <StyledLargeH2>{aboutContent[section].title}</StyledLargeH2>
                                    <StyledParagraph>{aboutContent[section].paragraph}</StyledParagraph>
                                    <StyledParagraph>{aboutContent[section].paragraph2}</StyledParagraph>
                                    <StyledParagraph>{aboutContent[section].paragraph3}</StyledParagraph>
                                </TextContainer>
                            </FlexParent>
                        ))}
                    </div>
                </>
            ) : null}
        </Layout>
    );
};

export default About;

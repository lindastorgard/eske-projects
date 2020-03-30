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
            console.log(aboutpage[0].acf);
        }
    }, [aboutpage]);
    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <p>error</p>
            ) : aboutContent ? (
                <>
                    <FlexParent>
                        <ImageContainer>
                            <StyledImage src={aboutContent.section1.image} alt="interior" />
                        </ImageContainer>
                        <TextContainer>
                            <StyledLargeH2>{aboutContent.section1.title}</StyledLargeH2>
                            <StyledParagraph>{aboutContent.section1.paragraph}</StyledParagraph>
                            <StyledParagraph>{aboutContent.section1.paragraph2}</StyledParagraph>
                            <StyledParagraph>{aboutContent.section1.paragraph3}</StyledParagraph>
                        </TextContainer>
                    </FlexParent>
                    <FlexParent>
                        <ImageContainer>
                            <StyledImage src={aboutContent.section2.image} alt="interior" />
                        </ImageContainer>
                        <TextContainer>
                            <StyledLargeH2>{aboutContent.section2.title}</StyledLargeH2>
                            <StyledParagraph>{aboutContent.section2.paragraph}</StyledParagraph>
                            <StyledParagraph>{aboutContent.section2.paragraph2}</StyledParagraph>
                            <StyledParagraph>{aboutContent.section2.paragraph3}</StyledParagraph>
                        </TextContainer>
                    </FlexParent>
                    <FlexParent>
                        <ImageContainer>
                            <StyledImage src={aboutContent.section3.image} alt="interior" />
                        </ImageContainer>
                        <TextContainer>
                            <StyledLargeH2>{aboutContent.section3.title}</StyledLargeH2>
                            <StyledParagraph>{aboutContent.section3.paragraph}</StyledParagraph>
                            <StyledParagraph>{aboutContent.section3.paragraph2}</StyledParagraph>
                            <StyledParagraph>{aboutContent.section3.paragraph3}</StyledParagraph>
                        </TextContainer>
                    </FlexParent>
                </>
            ) : null}
        </Layout>
    );
};

export default About;

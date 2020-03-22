import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { StyledH3, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';

const HeaderImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const FlexParent = styled.div`
    ${({ theme }) => theme.sm`
        display: flex;
    `};
`;

const TextContent = styled.div`
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[1]} 0;
    box-sizing: border-box;
    ${({ theme }) => theme.sm`
        background: white;
        margin-top: -80px;
        position: absolute;
        z-index: 2;
        width: 50%;
    `};
`;

const Column = styled.div`
    ${({ theme }) => theme.sm`
        width: 50%;
        display: flex;
    `};
`;

const StyledImage = styled.img`
    width: 50%;
`;

const AboutWrapper = styled.div`
    margin-left: 250px;
    position: relative;
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
        <AboutWrapper>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>error</p>
            ) : aboutContent ? (
                <>
                    <HeaderImage src={aboutContent.images[0]} alt="top background" />
                    <FlexParent>
                        <Column>
                            <TextContent>
                                <StyledH3>{aboutContent.page_title}</StyledH3>
                                <StyledParagraph>{aboutContent.page_content.section1}</StyledParagraph>
                                <StyledParagraph>{aboutContent.page_content.section2}</StyledParagraph>
                                <StyledParagraph>{aboutContent.page_content.section3}</StyledParagraph>
                            </TextContent>
                        </Column>
                        <Column>
                            <StyledImage src={aboutContent.images[1]} alt="interior" />
                            <StyledImage src={aboutContent.images[2]} alt="about eske" />
                        </Column>
                    </FlexParent>
                </>
            ) : null}
        </AboutWrapper>
    );
};

export default About;

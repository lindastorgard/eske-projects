import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { StyledH2, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import { HideAt, ShowAt } from 'react-with-breakpoints';

const HeaderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row: 1/4;
    grid-column: 1/5;
`;

const HeroGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px 40px;
    grid-gap: ${({ theme }) => theme.space[1]};
    padding-bottom: ${({ theme }) => theme.space[1]};
    ${({ theme }) => theme.sm`
        grid-template-columns: repeat(4, minmax(0, 1fr));
    `};
    ${StyledH2} {
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        padding: ${({ theme }) => theme.space[2]};
    }
`;

const OverlayContainer = styled.div`
    grid-row: 2/3;
    grid-column: 3/5;
`;

const FlexParent = styled.div`
    ${({ theme }) => theme.sm`
        display: flex;
    `};
`;

const Flex1 = styled.div`
    flex: 1;
    padding: 8px;
`;

const EmployeeGrid = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.space[4]};
    padding-bottom: ${({ theme }) => theme.space[1]};
`;

const Flex2 = styled.div`
    padding: 8px;
    flex: 2;
`;

const EmployeeInfo = styled.div`
    grid-row: 2/3;
    grid-column: 1/2;
    bottom: 0;
    background: black;
    color: white;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
`;
const EmployeeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row: 1/3;
    grid-column: 1/2;
`;

const About = () => {
    const { isLoading, error, aboutpage } = useApi();
    const [aboutContent, setAboutContent] = useState(null);
    useEffect(() => {
        if (aboutpage) {
            setAboutContent(aboutpage[0].acf);
        }
    }, [aboutpage]);
    console.log(aboutContent);
    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <p>error</p>
            ) : aboutContent ? (
                <>
                    <HeroGrid>
                        <HeaderImage src={aboutContent.images[0]} alt="top background" />
                        {
                            <ShowAt breakpoint="mediumAndAbove">
                                <OverlayContainer>
                                    <StyledH2>{aboutContent.page_header_text}</StyledH2>
                                </OverlayContainer>
                            </ShowAt>
                        }
                    </HeroGrid>
                    <FlexParent>
                        <Flex2>
                            <StyledH2>{aboutContent.page_title}</StyledH2>
                            {Object.keys(aboutContent.page_content).map(section => (
                                <div>
                                    <StyledParagraph>{aboutContent.page_content[section]}</StyledParagraph>
                                </div>
                            ))}
                        </Flex2>
                        {aboutContent.employees.map((employee, index) => (
                            <Flex1 key={index}>
                                <EmployeeGrid>
                                    <EmployeeImage src={employee.image} alt="employee" />
                                    <EmployeeInfo>
                                        <p>{employee.name}</p>
                                        <p>{employee.role}</p>
                                        <p>{employee.email}</p>
                                    </EmployeeInfo>
                                </EmployeeGrid>
                            </Flex1>
                        ))}
                    </FlexParent>
                    <FlexParent>
                        <Flex2>
                            <StyledImage src={aboutContent.images[1]} alt="interior" />
                        </Flex2>
                        <Flex1>
                            <StyledImage src={aboutContent.images[2]} alt="about eske" />
                        </Flex1>
                    </FlexParent>
                </>
            ) : null}
        </Layout>
    );
};

export default About;

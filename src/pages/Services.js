import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH1, StyledLargeH2, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import ScrollMemory from 'react-router-scroll-memory';

const GridContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    ${({ theme }) => theme.sm`
    grid-template-rows: repeat(5, auto);
     `};
`;
const HeroImage = styled.div`
    background: ${props => `url(${props.image})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    grid-column: 1/2;
    ${({ theme }) => theme.sm`
      height: 450px;
    `};
`;
const Quote = styled.div`
    grid-row: 2;
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[5]};
    justify-self: center;
    text-align: center;
    display: flex;
    ${({ theme }) => theme.sm`
      padding: ${({ theme }) => theme.space[5]}; 
    `};
    ${StyledH1} {
        font-size: ${({ theme }) => theme.fontSizes[5]};
        margin: 0;
        margin-top: ${({ theme }) => theme.space[0]};
        &:before {
            color: ${({ theme }) => theme.brand};
            content: open-quote;
            font-size: 150px;
            line-height: 0;
            vertical-align: -0.4em;
            margin-right: -${({ theme }) => theme.space[2]};
            margin-left: -35px;
        }
        ${({ theme }) => theme.sm`
        font-size: ${({ theme }) => theme.fontSizes[6]};
        &:before {
          font-size: 180px;
      }
    `};
    }
`;

const FlexParent = styled.div`
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.sm`
        flex-direction: row;
        &:nth-child(odd) {
          flex-direction: row-reverse;  
        }
    `};
    ${({ theme }) => theme.lg`    
      margin-right: ${({ theme }) => theme.space[1]};
    `};
`;

const Column = styled.div`
    flex: 1;
    align-self: center;
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
`;

const Number = styled.p`
    font-size: ${({ theme }) => theme.fontSizes[7]};
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0;
`;

const Underline = styled.div`
    width: 120px;
    height: 1px;
    color: black;
    margin: 0 auto;
    background-color: black;
`;

const StyledListItem = styled.li`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    line-height: 1.5;
`;

function Services() {
    const { servicespage, error, isLoading } = useApi();

    return (
        <>
            <ScrollMemory />
            <Layout>
                {isLoading ? (
                    <CircleLoader />
                ) : error ? (
                    <StyledParagraph>{error}</StyledParagraph>
                ) : servicespage && servicespage[0].acf ? (
                    <GridContainer>
                        <HeroImage image={servicespage[0].acf.hero_image} />
                        <Quote>
                            <StyledH1>{servicespage[0].acf.quote}</StyledH1>
                        </Quote>

                        {Object.keys(servicespage[0].acf.sections).map((section, index) => {
                            const {
                                acf: { sections },
                            } = servicespage[0];
                            return (
                                <FlexParent key={index}>
                                    <Column>
                                        <img src={sections[section].image} alt="tjenster" />
                                    </Column>
                                    <Column>
                                        <article>
                                            <Number>{sections[section].section_nr}</Number>
                                            <Underline />
                                            <StyledLargeH2>{sections[section].title}</StyledLargeH2>
                                            <StyledParagraph>{sections[section].text}</StyledParagraph>
                                            <ul>
                                                {sections[section].list_items &&
                                                    sections[section].list_items.map((li, index) => (
                                                        <StyledListItem key={index}>{li.list_item}</StyledListItem>
                                                    ))}
                                            </ul>
                                        </article>
                                    </Column>
                                </FlexParent>
                            );
                        })}
                    </GridContainer>
                ) : null}
            </Layout>
        </>
    );
}

export default Services;

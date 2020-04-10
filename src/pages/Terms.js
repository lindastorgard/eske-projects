import React from 'react';
import useApi from '../hooks/useApi';
import { StyledH1, StyledH2, StyledParagraph } from '../styles/typography';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';
import ScrollMemory from 'react-router-scroll-memory';

const ListItem = styled.li`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    line-height: 1.5;
`;
const StyledLink = styled.a`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    line-height: 1.5;
    text-decoration: none;
    color: ${({ theme }) => theme.darkbrand};
    &:hover {
        color: ${({ theme }) => theme.brand};
    }
`;

const Terms = () => {
    const { termsPage, error, isLoading } = useApi();
    if (termsPage) {
        console.log(termsPage[0].acf.sections.section8);
    }

    return (
        <Layout>
            <ScrollMemory />
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <StyledParagraph>{error}</StyledParagraph>
            ) : termsPage ? (
                <article>
                    <StyledH1>{termsPage[0].acf.title}</StyledH1>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section1.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section1.paragraph}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section1.paragraph2}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section1.paragraph3}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section1.paragraph4}</StyledParagraph>
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section2.subheader}</StyledH2>
                        {Object.keys(termsPage[0].acf.sections.section2.bullet_points).map((bullet, index) => {
                            const { bullet_points } = termsPage[0].acf.sections.section2;
                            return (
                                <ul>
                                    <ListItem>{bullet_points[bullet]}</ListItem>
                                </ul>
                            );
                        })}
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section3.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section3.paragraph}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section3.paragraph2}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section3.paragraph3}</StyledParagraph>
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section4.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section4.paragraph}</StyledParagraph>
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section5.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section5.paragraph}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section5.paragraph2}</StyledParagraph>
                        {Object.keys(termsPage[0].acf.sections.section5.bullet_points).map((bullet, index) => {
                            const { bullet_points } = termsPage[0].acf.sections.section5;
                            return (
                                <ul>
                                    <ListItem>{bullet_points[bullet]}</ListItem>
                                </ul>
                            );
                        })}
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section6.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section6.paragraph}</StyledParagraph>
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section7.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section7.paragraph}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section7.paragraph2}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section7.paragraph3}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section7.paragraph4}</StyledParagraph>
                    </section>
                    <section>
                        <StyledH2>{termsPage[0].acf.sections.section8.subheader}</StyledH2>
                        <StyledParagraph>{termsPage[0].acf.sections.section8.paragraph}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section8.paragraph2}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section8.paragraph3}</StyledParagraph>
                        <StyledParagraph>{termsPage[0].acf.sections.section8.paragraph4}</StyledParagraph>
                        <StyledParagraph>
                            {termsPage[0].acf.sections.section8.paragraph5}{' '}
                            <span>
                                <StyledLink href={termsPage[0].acf.sections.section8.unregister_email}>
                                    lenken.
                                </StyledLink>
                            </span>
                        </StyledParagraph>
                    </section>
                </article>
            ) : null}
        </Layout>
    );
};

export default Terms;

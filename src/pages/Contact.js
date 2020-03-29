import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledH1, StyledParagraph } from '../styles/typography';
import Layout from '../components/Layout';
import CircleLoader from '../components/CircleLoader';

const Header = styled(StyledH1)`
    margin-top: 120px;
    ${({ theme }) => theme.lg` 
     margin-top: ${({ theme }) => theme.space[6]};
    `};
`;
const Wrapper = styled.div`
    display: flex;
`;

const StyledSection = styled.section`
    flex-basis: 300px;
    border: 1px solid green;
    &:first-of-type {
        border: 1px solid red;
        margin-right: 48px;
    }
`;

function Services() {
    const { isLoading, error, contactpage } = useApi();
    const [contactPageContent, setContactPage] = useState(null);
    console.log(contactPageContent);
    useEffect(() => {
        if (contactpage) {
            setContactPage(contactpage[0].acf);
        }
    }, [contactpage]);
    return (
        <Layout>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <p>error</p>
            ) : contactPageContent ? (
                <>
                    <Header>{contactPageContent.title}</Header>
                    <Wrapper>
                        <StyledSection>
                            <StyledParagraph>
                                {contactPageContent.text}
                                <span>{contactPageContent.contact_details.email}</span>
                            </StyledParagraph>
                            <StyledParagraph>{contactPageContent.contact_details.address.street}</StyledParagraph>
                            <StyledParagraph>{contactPageContent.contact_details.address.postal_code}</StyledParagraph>
                            <StyledParagraph>{contactPageContent.contact_details.address.country}</StyledParagraph>
                        </StyledSection>
                        <StyledSection>
                            <iframe
                                title="eske_as"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.550204345716!2d10.733024915882911!3d59.92301197032143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e79905529d3%3A0x9471c196272b8931!2sEske%20interi%C3%B8r%20og%20design!5e0!3m2!1ssv!2sse!4v1585493882710!5m2!1ssv!2sse"
                                width="600"
                                height="450"
                                frameborder="0"
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                        </StyledSection>
                    </Wrapper>
                </>
            ) : null}
        </Layout>
    );
}

export default Services;

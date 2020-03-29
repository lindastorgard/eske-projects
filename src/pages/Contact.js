import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledH1, StyledParagraph, StyledLink } from '../styles/typography';
import CircleLoader from '../components/CircleLoader';
import LocationIcon from '../components/icons/LocationIcon';
import Layout from '../components/Layout';
import PhoneIcon from '../components/icons/PhoneIcon';
import MailIcon from '../components/icons/MailIcon';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${({ theme }) => theme.brand};
    margin-bottom: ${({ theme }) => theme.space[3]};

    ${({ theme }) => theme.sm`
       max-height: 400px;
       grid-template-rows: auto;
       grid-template-columns: repeat(2, 1fr);
       grid-gap: ${({ theme }) => theme.space[3]};  
       margin-top: 0; 
    `};
`;
const Wrapper = styled.section`
    margin: ${({ theme }) => theme.space[3]};
    &:nth-of-type(2) {
        background: ${props => `url(${props.image})`};
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 0;
    }
    ${({ theme }) => theme.sm`
       margin: ${({ theme }) => theme.space[3]} 0 ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]};
       &:nth-of-type(2) {
        background: ${props => `url(${props.image})`};
        background-repeat: no-repeat;
        background-size: cover;
        margin: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]} 0;
    } 
    `};
`;

const StyledSection = styled.section`
    margin-bottom: ${({ theme }) => theme.space[3]};
    height: 300px;
`;

const Header = styled(StyledH1)`
    text-transform: uppercase;
    margin-top: 0%;
`;

const IconWrapper = styled.div`
    display: flex;
    margin-bottom: ${({ theme }) => theme.space[0]};
`;

const Paragraph = styled(StyledParagraph)`
    margin: 0;
`;

function Services() {
    const { isLoading, error, contactpage } = useApi();
    const [contactPageContent, setContactPage] = useState(null);

    useEffect(() => {
        if (contactpage) {
            setContactPage(contactpage[0].acf);
        }
    }, [contactpage]);
    return (
        <>
            {isLoading ? (
                <CircleLoader />
            ) : error ? (
                <p>error</p>
            ) : contactPageContent ? (
                <Layout>
                    <Container>
                        <Wrapper>
                            <Header>{contactPageContent.title}</Header>

                            <StyledParagraph>
                                {contactPageContent.text}
                                <span>
                                    <StyledLink href={`mailto:${contactPageContent.contact_details.email}`}>
                                        {contactPageContent.contact_details.email}
                                    </StyledLink>
                                </span>
                            </StyledParagraph>

                            <IconWrapper>
                                <PhoneIcon />
                                <Paragraph>{contactPageContent.contact_details.phone_}</Paragraph>
                            </IconWrapper>

                            <IconWrapper>
                                <MailIcon />
                                <Paragraph>{contactPageContent.contact_details.email}</Paragraph>
                            </IconWrapper>

                            <IconWrapper>
                                <LocationIcon />
                                <div>
                                    <Paragraph>{contactPageContent.contact_details.address.street}</Paragraph>
                                    <Paragraph>{contactPageContent.contact_details.address.postal_code}</Paragraph>
                                    <Paragraph>{contactPageContent.contact_details.address.country}</Paragraph>
                                </div>
                            </IconWrapper>
                        </Wrapper>
                        <Wrapper image={contactPageContent.image.url}></Wrapper>
                    </Container>

                    <StyledSection>
                        <iframe
                            title="eske_as"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.550204345716!2d10.733024915882911!3d59.92301197032143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e79905529d3%3A0x9471c196272b8931!2sEske%20interi%C3%B8r%20og%20design!5e0!3m2!1ssv!2sse!4v1585493882710!5m2!1ssv!2sse"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </StyledSection>
                </Layout>
            ) : null}
        </>
    );
}

export default Services;

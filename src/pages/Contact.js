import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledH1, StyledLargeH2, StyledParagraph, StyledLink } from '../styles/typography';
import CircleLoader from '../components/CircleLoader';
import LocationIcon from '../components/icons/LocationIcon';
import Layout from '../components/Layout';
import PhoneIcon from '../components/icons/PhoneIcon';
import MailIcon from '../components/icons/MailIcon';
import Mapbox from '../components/MapboxMap';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: ${({ theme }) => theme.space[3]};

    ${({ theme }) => theme.sm`
       grid-template-rows: auto;
       grid-template-columns: repeat(2, 1fr);
       grid-gap: ${({ theme }) => theme.space[1]};
       margin-top: 0; 
    `};

    ${({ theme }) => theme.xl`
       grid-template-rows: auto;
       grid-template-columns: repeat(3, 1fr);
       margin-top: 0; 
    `};
`;

const Wrapper = styled.section`
    ${({ theme }) => theme.sm`
      grid-column: span 2;
      &:nth-of-type(4) {
       grid-column: span 1;
      } 
      &:nth-of-type(5) {
        grid-column: span 1;
        margin-right: ${({ theme }) => theme.space[1]};
       } 
    `};
    ${({ theme }) => theme.xl`
      grid-column: span 3;
      &:nth-of-type(2) {
       grid-column: span 3;
      } 
      &:nth-of-type(3) {
        grid-column: span 1;
       } 
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

const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ${({ theme }) => theme.sm`
        margin-top: ${({ theme }) => theme.space[1]};
    `};
    ${({ theme }) => theme.lg`
        margin-top: ${({ theme }) => theme.space[6]};
    `};
    ${({ theme }) => theme.xl`
        margin-top: ${({ theme }) => theme.space[1]};
    `};
`;

const StyledMapSection = styled.section`
    margin: ${({ theme }) => theme.space[1]} 0;
    width: 100%;
    height: 300px;
    ${({ theme }) => theme.sm`
        margin-top: ${({ theme }) => theme.space[1]};
    `};
    ${({ theme }) => theme.lg`
        margin-top: ${({ theme }) => theme.space[6]};
    `};
    ${({ theme }) => theme.xl`
        margin-top: ${({ theme }) => theme.space[1]};
    `};
`;

const Header = styled(StyledH1)`
    text-align: center;
    ${({ theme }) => theme.xl`
        margin-top: ${({ theme }) => theme.space[4]};
    `};
`;

const HeaderContainer = styled.div`
    text-align: center;
    ${({ theme }) => theme.xl`
        text-align: left;
    `};
`;

const HeaderAdress = styled(StyledLargeH2)`
    display: inline-block;
    margin-top: ${({ theme }) => theme.space[4]};
    margin-bottom: 0;
    ${({ theme }) => theme.sm`
       margin-top: ${({ theme }) => theme.space[3]};
    `};
    ${({ theme }) => theme.lg`
       margin-top: ${({ theme }) => theme.space[6]};
    `};
    ${({ theme }) => theme.xl`
        margin-top: ${({ theme }) => theme.space[1]};
    `};
`;

const Address = styled.div`
    text-align: left;
`;

const StyledHr = styled.hr`
    border: 0;
    height: 1px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.text};
    margin: ${({ theme }) => theme.space[0]} 0 ${({ theme }) => theme.space[2]} 0;
    width: 100%;
`;

const StyledText = styled(StyledParagraph)`
    text-align: center;
    ${({ theme }) => theme.sm`
        margin: 0 100px;
    `};
    ${({ theme }) => theme.lg`
        margin: 0 160px;
    `};
    ${({ theme }) => theme.xl`
        margin: 0 200px ${({ theme }) => theme.space[4]} 200px;
    `};
`;

const StyledContactText = styled(StyledParagraph)`
    margin: 0;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[0]};
    text-align: center;
    ${({ theme }) => theme.xl`
        text-align: left;
        justify-content: unset;
    `};
`;

const Paragraph = styled(StyledParagraph)`
    margin: 0;
`;

const Contact = () => {
    const { isLoading, error, contactpage } = useApi();
    const [contactPageContent, setContactPage] = useState(null);

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
                <StyledParagraph>{error}</StyledParagraph>
            ) : contactPageContent ? (
                <>
                    <Container>
                        <Wrapper>
                            <HeroImage image={contactPageContent.image.url} />
                        </Wrapper>
                        <Wrapper>
                            <Header>{contactPageContent.title}</Header>
                            <StyledText>
                                {contactPageContent.text}
                                <span>
                                    <StyledLink href={`mailto:${contactPageContent.contact_details.email}`}>
                                        {contactPageContent.contact_details.email}
                                    </StyledLink>
                                </span>
                            </StyledText>
                        </Wrapper>
                        <Wrapper>
                            <HeaderContainer>
                                <HeaderAdress>
                                    {contactPageContent.contact_details.contact_title}
                                    <StyledHr />
                                </HeaderAdress>
                            </HeaderContainer>
                            <IconWrapper>
                                <PhoneIcon />
                                <StyledContactText>
                                    <span>
                                        <StyledLink href={`tel:${contactPageContent.contact_details.phone_}`}>
                                            {contactPageContent.contact_details.phone_}
                                        </StyledLink>
                                    </span>
                                </StyledContactText>
                            </IconWrapper>

                            <IconWrapper>
                                <MailIcon />
                                <StyledContactText>
                                    <span>
                                        <StyledLink href={`mailto:${contactPageContent.contact_details.email}`}>
                                            {contactPageContent.contact_details.email}
                                        </StyledLink>
                                    </span>
                                </StyledContactText>
                            </IconWrapper>

                            <IconWrapper>
                                <LocationIcon />
                                <Address>
                                    <Paragraph>{contactPageContent.contact_details.address.street}</Paragraph>
                                    <Paragraph>{contactPageContent.contact_details.address.postal_code}</Paragraph>
                                    <Paragraph>{contactPageContent.contact_details.address.country}</Paragraph>
                                </Address>
                            </IconWrapper>
                        </Wrapper>
                        <Wrapper>
                            <StyledMapSection>
                                <Mapbox />
                            </StyledMapSection>
                        </Wrapper>
                        <Wrapper>
                            <ImageWrapper>
                                <img src={contactPageContent.image2.url} alt={contactPageContent.image2.title} />
                            </ImageWrapper>
                        </Wrapper>
                    </Container>
                </>
            ) : null}
        </Layout>
    );
};

export default Contact;

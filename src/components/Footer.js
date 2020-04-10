import React from 'react';
import styled from 'styled-components';
// import { TERMS } from '../utils/urlRoutes';
import { Link } from 'react-router-dom';
import { StyledParagraph } from '../styles/typography';

const FlexParent = styled.div`
    display: flex;
    justify-content: flex-end;
    ${({ theme }) => theme.lg`
        margin-right: ${({ theme }) => theme.space[1]};
  `};
`;

const StyledText = styled(StyledParagraph)`
    font-size: ${({ theme }) => theme.fontSizes[0]};
    margin-left: ${({ theme }) => theme.space[2]};
`;

const StyledFooterLink = styled(StyledParagraph)`
    margin-left: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        &:hover {
            color: ${({ theme }) => theme.brandhover};
        }
    }
`;

const Footer = () => {
    return (
        <>
            <FlexParent>
                <StyledFooterLink>
                    {/* <Link to={TERMS.path}>Personvern</Link> */}
                </StyledFooterLink>
                <StyledText>© Eske AS 2020</StyledText>
            </FlexParent>
        </>
    );
};
export default Footer;

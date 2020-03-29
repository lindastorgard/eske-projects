import styled from 'styled-components';

export const StyledH1 = styled.h1`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[5]};
    letter-spacing: 2px;
`;

export const StyledLargeH2 = styled.h2`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[5]};
    letter-spacing: 2px;
`;

export const StyledH2 = styled.h2`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    letter-spacing: 2px;
`;

export const StyledH3 = styled.h3`
    font-weight: 300;
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: 2px;
`;

export const StyledLink = styled.a`
    font-family: ${({ theme }) => theme.fonts.body};
    text-decoration: none;
    color: ${({ theme }) => theme.darkbrand};
    &:hover {
        color: ${({ theme }) => theme.brandhover};
    }
`;

export const StyledParagraph = styled.p`
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    line-height: 1.5;
`;

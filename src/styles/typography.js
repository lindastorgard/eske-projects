import styled from 'styled-components';

export const StyledH1 = styled.h1`
    font-family: ${({ theme }) => theme.heading};
    font-weight: 500;
`;

export const StyledH3 = styled.h3`
    font-weight: 300;
    font-family: ${({ theme }) => theme.fonts.heading};
`;

export const StyledLink = styled.a`
    font-family: ${({ theme }) => theme.body};
    text-decoration: none;
`;

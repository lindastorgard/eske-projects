import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledLogo = styled.img`
    height: ${({ theme }) => theme.space[6]};
    display: block;
    position: absolute;
    z-index: 98;
    ${({ theme }) => theme.sm`
        height: ${({ theme }) => theme.space[7]};
    `};
    ${({ theme }) => theme.lg`
        height: ${({ theme }) => theme.space[8]};
    `};
`;

const Logo = () => {
    return <StyledLogo src={logo} alt="Eske logo" />;
};

export default Logo;

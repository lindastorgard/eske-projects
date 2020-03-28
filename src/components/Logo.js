import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledLogo = styled.img`
    height: ${({ theme }) => theme.space[6]};
    display: block;
    margin: 0 auto;
    position; absolute;
    z-index: 98;
    ${({ theme }) => theme.lg`
        height: ${({ theme }) => theme.space[7]};
    `};
`;

const Logo = () => {
    return <StyledLogo src={logo} alt="Eske logo" />;
};

export default Logo;

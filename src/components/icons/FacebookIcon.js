import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledIcon = styled.svg`
    display: block;
    height: ${({ theme }) => theme.space[2]};
    padding-right: ${({ theme }) => theme.space[1]};
    fill: ${({ theme }) => theme.darkbrand};
    &:hover {
        fill: ${({ theme }) => theme.brand};
    }
    ${({ theme }) => theme.lg`
        fill: ${props => props.fillColor};
        &:hover{
            fill: ${props => props.hover};
        }
`}
`;

const FacebookIcon = () => {
    const { pathname } = useLocation();
    return (
        <StyledIcon
            fillColor={pathname === '/' ? ({ theme }) => theme.primary : ({ theme }) => theme.darkbrand}
            hover={pathname === '/' ? ({ theme }) => theme.darkbrand : ({ theme }) => theme.brand}
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            className="svg-inline--fa fa-facebook-f fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="20px"
            height="20px"
        >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </StyledIcon>
    );
};

export default FacebookIcon;

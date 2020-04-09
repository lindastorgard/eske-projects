import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink as Link, useLocation } from 'react-router-dom';

const Background = styled.div`
    position: absolute;
    left: -100px;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(to right, #ebe0e0, #fff);
    transition: 1s;
    ${({ theme }) => theme.lg`
      background-image: ${props => props.gradient};
    `}
`;
const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 150px;
    height: 24px;
    &:hover {
        ${Background} {
            transition: 1s;
            left: 0;
        }
    }
    ${props =>
        props.active &&
        css`
            ${Background} {
                transition: 1s;
                left: 0;
            }
        `}
`;

const NavItem = styled(Link)`
    margin-top: 8px;
    position: absolute;
    list-style: none;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
    ${({ theme }) => theme.lg`
       color: ${props => props.colorprop};
       &:hover{
	   color: ${props => props.hovercolor};

     }
    `}
`;

const NavLink = ({ url, link }) => {
    const { pathname } = useLocation();

    const [active, setActive] = useState(false);

    return (
        <Wrapper active={active ? true : false}>
            <Background gradient={pathname === '/' ? 'none' : 'linear-gradient(to right, #ebe0e0, #fff)'} />
            <NavItem
                colorprop={pathname === '/' ? '#fff' : '#212121'}
                hovercolor={pathname === '/' ? '#C199A6' : '#212121'}
                to={url}
                isActive={match => {
                    if (match) {
                        setActive(true);
                    } else setActive(false);
                }}
            >
                {link}
            </NavItem>
        </Wrapper>
    );
};
export default NavLink;

NavLink.propTypes = {
    url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

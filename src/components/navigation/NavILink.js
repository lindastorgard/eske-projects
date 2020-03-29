import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Background = styled.div`
    position: absolute;
    left: -100px;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(to right, #ebe0e0, #fff);
    transition: 1s;
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
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
`;

const NavLink = ({ url, link }) => {
    const [active, setActive] = useState(false);
    return (
        <Wrapper active={active ? true : false}>
            <Background />
            <NavItem
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

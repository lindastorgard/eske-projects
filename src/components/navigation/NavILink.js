import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    /* &:hover {
        background-image: linear-gradient(to right, #ebe0e0, #fff);
    } */
`;

const NavLink = ({ url, link }) => {
    return (
        <Wrapper>
            <Background />
            <NavItem to={url}>{link}</NavItem>
        </Wrapper>
    );
};
export default NavLink;

NavLink.propTypes = {
    url: PropTypes.string,
    link: PropTypes.string,
};

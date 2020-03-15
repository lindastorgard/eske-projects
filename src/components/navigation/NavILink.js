import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-dom';
import { PORTFOLIO, SERVICES, ABOUT, VIDEO, LANDING_PAGE } from '../urlRoutes';

const NavItem = styled(Link)`
    list-style: none;
    text-decoration: none;
`;

const NavLink = () => {
    return <NavItem to={PORTFOLIO.path}>Portfolio</NavItem>;
};

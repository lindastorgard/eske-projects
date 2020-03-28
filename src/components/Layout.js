import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    margin-right: ${({ theme }) => theme.space[1]};
    margin-left: ${({ theme }) => theme.space[1]};
    margin-top: 80px;
    ${({ theme }) => theme.sm`
    margin-top: 88px;
    `};
    ${({ theme }) => theme.lg`
        margin-left: 200px;
        margin-top: ${({ theme }) => theme.space[1]};
        margin-bottom: ${({ theme }) => theme.space[1]};
	`};
`;

const Layout = ({ children }) => <Container>{children}</Container>;
export default Layout;

Layout.propTypes = {
    children: PropTypes.node,
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BackArrowIcon from './icons/BackArrowIcon';

const StyledButton = styled(Link)`
    border: none;
    background: transparent;
    align-self: flex-start;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.secondary};
    padding: ${({ theme }) => theme.space[2]} 0 0 0;
    cursor: pointer;
    &:hover {
        svg {
            fill: ${({ theme }) => theme.brand};
            cursor: pointer;
        }
        color: ${({ theme }) => theme.brand};
    }
    span {
        margin-left: ${({ theme }) => theme.space[0]};
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSizes[2]};
        font-family: ${({ theme }) => theme.fonts.body};
        font-weight: ${({ theme }) => theme.fontWeights[0]};
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`;

const BackButton = ({ children, href }) => {
    return (
        <StyledButton to={href}>
            <BackArrowIcon />
            <span>{children}</span>
        </StyledButton>
    );
};

export default BackButton;

BackButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

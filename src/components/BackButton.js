import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BackArrowIcon from './icons/BackArrowIcon';

const StyledButton = styled.button`
    border: none;
    background: transparent;
    align-self: flex-start;
    text-decoration: none;
    display: flex;
    align-items: center;
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

const BackButton = ({ children }) => {
    const history = useHistory();
    return (
        <StyledButton type="button" onClick={() => history.goBack()}>
            <BackArrowIcon />
            <span>{children}</span>
        </StyledButton>
    );
};

export default BackButton;

BackButton.propTypes = {
    children: PropTypes.node.isRequired,
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    text-transform: uppercase;
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: transparent;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    &:hover {
        background: ${({ theme }) => theme.secondary};
    }
    ${({ theme }) => theme.sm`
        font-size: ${({ theme }) => theme.fontSizes[3]};
    `}
`;

const PrimaryButton = ({ children }) => <StyledButton>{children}</StyledButton>;

export default PrimaryButton;
PrimaryButton.propTypes = {
    children: PropTypes.node,
};
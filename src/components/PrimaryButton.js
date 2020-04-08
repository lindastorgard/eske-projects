import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    text-transform: uppercase;
    border: 1px solid ${props => (props.revertColor ? 'black' : 'white')};
    color: ${props => (props.revertColor ? 'black' : 'white')};
    background: transparent;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    cursor: pointer;
    &:hover {
        background: ${props => (props.revertColor ? 'white' : 'black')};
    }
    ${({ theme }) => theme.sm`
        font-size: ${({ theme }) => theme.fontSizes[3]};
    `}
`;

const PrimaryButton = ({ children, revertStyle }) => (
    <StyledButton revertColor={revertStyle ? true : false}>{children}</StyledButton>
);

export default PrimaryButton;
PrimaryButton.propTypes = {
    children: PropTypes.node,
};

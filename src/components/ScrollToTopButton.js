import React from 'react';
import styled from 'styled-components';
import ArrowUpIcon from './icons/ArrowUpIcon';

const StyledButton = styled.button`
    background: black;
    color: white;
    display: inline-block;
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    ${({ theme }) => theme.sm`
        bottom: 20px;
        right: 32px;
    `}
`;

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            right: 0,
            behavior: 'smooth',
        });
    };
    return (
        <StyledButton onClick={scrollToTop}>
            <ArrowUpIcon />
        </StyledButton>
    );
};

export default ScrollToTopButton;

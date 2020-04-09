import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowUpIcon from './icons/ArrowUpIcon';

const StyledButton = styled.button`
    background: black;
    color: white;
    display: inline-block;
    position: fixed;
    bottom: 104px;
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
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', pageScroll);
        return () => window.removeEventListener('scroll', pageScroll);
    }, []);

    const pageScroll = function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showButton && (
                <StyledButton onClick={scrollToTop}>
                    <ArrowUpIcon />
                </StyledButton>
            )}
        </>
    );
};

export default ScrollToTopButton;

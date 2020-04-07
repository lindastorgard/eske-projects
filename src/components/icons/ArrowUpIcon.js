import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.svg`
    display: block;
    height: 18px;
    path {
        fill: ${({ theme }) => theme.primary};
    }
`;

const ArrowUpIcon = () => {
    return (
        <StyledIcon
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-up"
            className="svg-inline--fa fa-chevron-up fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20px"
            height="20px"
        >
            <path
                fill="currentColor"
                d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
            ></path>
        </StyledIcon>
    );
};

export default ArrowUpIcon;

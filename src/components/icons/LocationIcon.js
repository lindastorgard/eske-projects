import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.svg`
    display: block;
    height: ${({ theme }) => theme.fontSizes[1]};
    padding-right: ${({ theme }) => theme.space[1]};
    padding-top: 4px;
    fill: ${({ theme }) => theme.darkbrand};
`;

const LocationIcon = () => {
    return (
        <StyledIcon
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="map-marker-alt"
            className="svg-inline--fa fa-map-marker-alt fa-w-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
        >
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
        </StyledIcon>
    );
};

export default LocationIcon;

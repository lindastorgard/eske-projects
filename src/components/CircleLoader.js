import React from 'react';
import styled, { keyframes } from 'styled-components';
import { StyledH3 } from '../styles/typography';

const CircleLoaderContainer = styled.div`
    padding: 16px;
    max-width: 160px;
    margin: 0 auto;
`;

const LoaderSpinner = keyframes`
    0% { transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
`;

const LoaderCircle = styled.div`
    margin: 0 auto;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-left-color: ${props => props.theme.primary};
    animation-name: ${LoaderSpinner};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: relative;
    vertical-align: top;
    box-sizing: content-box;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    &:after {
        border-radius: 50%;
        width: 130px;
        height: 130px;
    }
`;

const CenteredHeader = styled(StyledH3)`
    text-align: center;
`;

const CircleLoader = () => {
    return (
        <CircleLoaderContainer>
            <CenteredHeader>Loading...</CenteredHeader>
            <LoaderCircle />
        </CircleLoaderContainer>
    );
};

export default CircleLoader;

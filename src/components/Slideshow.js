import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

const SlideshowContainer = styled.div`
    margin-top: 80px;
    height: calc(100vh - 80px);
    background-color: ${({ theme }) => theme.primary};
    ${({ theme }) => theme.lg`
        margin-top: 0px;
        height: 100vh;
    `};
`;

const ImageContainer = styled.div`
    margin-left: 0;
    ${({ theme }) => theme.lg`
        margin-left: 200px;
    `};
    div {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const fadeProperties = {
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    },
};

const Slideshow = ({ landingpage }) => {
    return (
        <SlideshowContainer>
            <Fade {...fadeProperties}>
                {landingpage[0].acf.gallery.map(({ url, id }) => {
                    return (
                        <ImageContainer key={id}>
                            <div>
                                <img src={url} alt="todo" />
                            </div>
                        </ImageContainer>
                    );
                })}
            </Fade>
        </SlideshowContainer>
    );
};

export default Slideshow;

Slideshow.propTypes = {
    landingpage: PropTypes.array.isRequired,
};

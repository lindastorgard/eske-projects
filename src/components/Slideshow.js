import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

const SlideshowContainer = styled.div`
    background-color: ${({ theme }) => theme.primary};
`;

const ImageContainer = styled.div`
    div {
        width: 100%;
        height: calc(100vh - 80px);
        overflow: hidden;
        ${({ theme }) => theme.lg`
            height: 100vh
        `};
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

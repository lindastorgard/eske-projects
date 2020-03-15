import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

const SlideshowContainer = styled.div`
    width: 500px;
    margin: auto;
`;

const ImageContainer = styled.div`
    div {
        width: 500px;
        height: 300px;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`;

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
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

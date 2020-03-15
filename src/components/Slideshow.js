import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

const SlideshowContainer = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.brand}
    ${({ theme }) => theme.md`
    `}
    margin: auto;
`;

const ImageContainer = styled.div`
    margin-left: 250px;
    div {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
`;

const fadeProperties = {
    duration: 3000,
    transitionDuration: 300,
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

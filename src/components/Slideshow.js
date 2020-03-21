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
    margin-left: 0;
    ${({ theme }) => theme.sm`
        margin-left: 250px;
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

// const Container = styled.div`
//     margin-left: 0;
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(2, 50vh);
//     grid-gap: ${({ theme }) => theme.space[1]};
//     ${({ theme }) => theme.sm`
// 		  grid-template-columns: repeat(2, 1fr);
// 		  grid-template-rows: 100vh;
//           grid-gap: ${({ theme }) => theme.space[2]};
//           margin-left: 250px;
// 		`};
// `;

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

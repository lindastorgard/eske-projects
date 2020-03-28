import { css } from 'styled-components';

export const breakpoints = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1024px',
    xlarge: 'Infinity',
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) =>
        css`
            @media (min-width: ${breakpoints[label]}) {
                ${css(...args)};
            }
        `;
    return accumulator;
}, {});

const theme = {
    primary: '#fff',
    secondary: '#000',
    brand: '#EBE0E0',
    highlight: '#E5E5E5',
    text: '#212121',
    background: '#fff',
    fonts: {
        body: 'Roboto Condensed',
        heading: 'Playfair Display',
    },
    fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px'],
    fontWeights: [300, 400, 500, 600, 700],
    lineHeights: {
        body: '22px',
        heading: '30px',
        subHeading: '26px',
    },
    borderRadius: {
        input: '6px',
        button: '2px',
        tag: '20px',
        round: '30px',
    },
    space: ['8px', '16px', '24px', '32px', '40px', '48px', '64px', '96px'],
    ...media,
};
export default theme;

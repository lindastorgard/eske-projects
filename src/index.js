import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

var WebFont = require('webfontloader');

WebFont.load({
    google: {
        families: ['Playfair Display:400, 500, 600, 700', 'Roboto Condensed:300, 400, 700'],
    },
});

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    document.getElementById('root'),
);
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

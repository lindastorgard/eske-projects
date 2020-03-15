import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { BreakpointsProvider } from 'react-with-breakpoints';
import Portfolio from './Portfolio';
import Services from './Services';
import About from './About';
import Home from './Home';
import Nav from '../components/Nav/Nav';
import Video from './Video';
import MainCategory from './MainCategory';
import Category from './Category';

const breakpoints = {
    small: 468,
    medium: 768,
    large: 1024,
    xlarge: Infinity,
};

function App() {
    return (
        <BreakpointsProvider breakpoints={breakpoints}>
            <ThemeProvider theme={theme}>
                <Router>
                    <>
                        <Nav />
                        <main>
                            <Switch>
                                <Route exact path="/video" component={Video} />
                                <Route exact path="/omoss" component={About} />
                                <Route exact path="/tjenster" component={Services} />
                                <Route exact path="/portfolio" component={Portfolio} />
                                <Route exact path="/maincategories" component={MainCategory} />
                                <Route exact path="/category/:category" component={Category} />
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </main>
                    </>
                </Router>
            </ThemeProvider>
        </BreakpointsProvider>
    );
}

export default App;

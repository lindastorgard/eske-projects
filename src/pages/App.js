import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { BreakpointsProvider } from 'react-with-breakpoints';
import Portfolio from './Portfolio';
import Services from './Services';
import About from './About';
import Header from '../components/Header';
import Video from './Video';
import Projects from './Projects';
import LandingPage from './LandingPage';
import { LANDING_PAGE, VIDEO, ABOUT, SERVICES, PORTFOLIO, PROJECT_WITH_CATEGORY } from '../urlRoutes';

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
                        <Header />
                        <main>
                            <Switch>
                                <Route exact path={VIDEO.path} component={Video} />
                                <Route exact path={ABOUT.path} component={About} />
                                <Route exact path={SERVICES.path} component={Services} />
                                <Route exact path={PORTFOLIO.path} component={Portfolio} />
                                <Route exact path={PROJECT_WITH_CATEGORY.path} component={Projects} />
                                <Route exact path={LANDING_PAGE.path} component={LandingPage} />
                            </Switch>
                        </main>
                    </>
                </Router>
            </ThemeProvider>
        </BreakpointsProvider>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { BreakpointsProvider } from 'react-with-breakpoints';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import Header from '../components/Header';
import Projects from './Projects';
import LandingPage from './LandingPage';
import ProjectDetails from './ProjectDetails';
import {
    LANDING_PAGE,
    ABOUT,
    CONTACT,
    PORTFOLIO,
    SERVICES,
    PROJECT_WITH_CATEGORY,
    PROJECT_WITH_ID,
} from '../utils/urlRoutes';
import Services from './Services';
import NoMatch from './NoMatch';

const breakpoints = {
    xsmall: 468,
    small: 768,
    medium: 992,
    large: 1024,
    xlarge: Infinity,
};

function App() {
    return (
        <BreakpointsProvider breakpoints={breakpoints}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path={LANDING_PAGE.path} component={LandingPage} />
                        <Route exact path={ABOUT.path} component={About} />
                        <Route exact path={CONTACT.path} component={Contact} />
                        <Route exact path={PORTFOLIO.path} component={Portfolio} />
                        <Route exact path={SERVICES.path} component={Services} />
                        <Route exact path={PROJECT_WITH_ID.path} component={ProjectDetails} />
                        <Route exact path={PROJECT_WITH_CATEGORY.path} component={Projects} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </BreakpointsProvider>
    );
}

export default App;

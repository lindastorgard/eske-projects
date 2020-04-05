import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { BreakpointsProvider } from 'react-with-breakpoints';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import Header from '../components/Header';
import Video from './Video';
import Projects from './Projects';
import LandingPage from './LandingPage';
import ProjectDetails from './ProjectDetails';
import {
    LANDING_PAGE,
    VIDEO,
    ABOUT,
    CONTACT,
    PORTFOLIO,
    SERVICES,
    PROJECT_WITH_CATEGORY,
    PROJECT_WITH_ID,
} from '../utils/urlRoutes';
import Services from './Services';
// import { Helmet } from 'react-helmet';

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
                    <>
                        {/* <Helmet titleTemplate="%s - Eske Prosjekt" defaultTitle="Eske Prosjekt">
                            supports norwegian alphabet
                            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-10" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta property="og:title" content="Eske Prosjekt" />
                            <meta
                                name="description"
                                content="Eske Prosjekt er forlengelsen av designuniverset Eske Interiør. Begge drives av Karina Holmen og fokuserer på internasjonal design innen møbler, belysning og tilbehør."
                            />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://eskeprosjekt.no/" />
                            <meta property="og:site_name" content="Eske Prosjekt" />
                            <meta property="og:image" content={logo} />
                            <meta property="og:image:secure_url" content={logo} />
                            <meta property="og:image:width" content="1280" />
                            <meta property="og:image:height" content="720" />
                        </Helmet> */}
                        <Header />
                        <main>
                            <Switch>
                                <Route exact path={VIDEO.path} component={Video} />
                                <Route exact path={ABOUT.path} component={About} />
                                <Route exact path={CONTACT.path} component={Contact} />
                                <Route exact path={PORTFOLIO.path} component={Portfolio} />
                                <Route exact path={SERVICES.path} component={Services} />
                                <Route exact path={PROJECT_WITH_ID.path} component={ProjectDetails} />
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

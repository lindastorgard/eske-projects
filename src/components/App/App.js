import React from 'react';
import Nav from '../Nav/Nav';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import About from '../About/About';
import LandingPage from '../../pages/LandingPage';
import Video from '../Video/Video';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainCategory from '../../pages/MainCategory';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <div>
                    <Switch>
                        <Route exact path="/video" component={Video} />
                        <Route exact path="/omoss" component={About} />
                        <Route exact path="/tjenster" component={Services} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/maincategories" component={MainCategory} />
                        <Route exact path="/" component={LandingPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

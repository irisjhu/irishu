import React, { Component, useEffect } from 'react';
import {
    BrowserRouter as Router,
    useLocation
} from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Analytics from 'react-router-ga';

// components
import Header from './components/headerComponent/header';
import Container from './components/pages/common/container';
import { GATrackingID } from './config/keys';

// includes
import './assets/css/post/default.min.css';

// initialize google analytics tracking
ReactGA.initialize(GATrackingID);

var history = createBrowserHistory();

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Analytics id={GATrackingID}>
                    <div className="App">
                        <ScrollToTop />
                        <Header />
                        <Container />
                    </div>
                </Analytics>
            </Router>
        );
    }
}


export default App;

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
    constructor(props) {
        super(props);

        this.state = {
            dark: true
        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        this.setState({ dark: !this.state.dark });
    }

    render() {
        return (
            <div id="wrapper" className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
                <Router history={history}>
                    <Analytics id={GATrackingID}>
                        <div className="App">
                            <ScrollToTop />
                            <Header />
                            <Container theme={this.state.dark}/>
                        </div>
                    </Analytics>
                </Router>
            </div>
        );
    }
}


export default App;

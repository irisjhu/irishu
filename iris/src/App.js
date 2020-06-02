import React, { Component, useEffect } from 'react';
import {
    BrowserRouter as Router,
    useLocation
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Container from './components/pages/common/container';

// includes
import './assets/css/default.min.css';

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
            <Router>
                <div className="App">
                    <ScrollToTop />
                    <Header />
                    <Container />
                </div>
            </Router>
        );
    }
}

export default App;

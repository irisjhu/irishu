import React, { Component, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    useLocation
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import AboutMe from './components/pages/aboutMeComponents/aboutMe';
import Experience from './components/pages/experienceComponents/experience';
import Projects from './components/pages/projectsComponents/projects';
import Footer from './components/footerComponent/footer';

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
                <ScrollToTop />
                <div className="App">
                    <Header />
                    <div className="flex-wrapper">
                        <div className="main">
                            <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe} />
                            <Route exact path={process.env.PUBLIC_URL + '/experience'} component={Experience} />
                            <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

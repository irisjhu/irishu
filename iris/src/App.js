import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import AboutMe from './components/pages/aboutMeComponents/aboutMe';
import Experience from './components/pages/experienceComponents/experience';
import Projects from './components/pages/projectsComponents/projects';

// includes
import './assets/css/default.min.css';

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="main">
                        <Route exact path='/irishu/' component={AboutMe} />
                        <Route exact path='/irishu/experience' component={Experience} />
                        <Route exact path='/irishu/projects' component={Projects} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import AboutMe from '../aboutMeComponents/aboutMe';
import Experience from '../experienceComponents/experience';
import Projects from '../projectsComponents/projects';
import Footer from '../../footerComponent/footer';

class Container extends Component {
    render() {
        const currentKey = this.props.location.pathname.split('/')[1] || '/';

        return (
            <div className="flex-wrapper">
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={currentKey}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames={'fade'}
                        appear
                    >
                        <section className="route-section">
                            <div className="main">
                                <Switch location={this.props.location}>
                                    <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe} />
                                    <Route exact path={process.env.PUBLIC_URL + '/experience'} component={Experience} />
                                    <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
                                </Switch>
                            </div>
                            <Footer />
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(Container);

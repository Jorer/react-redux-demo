import React, { Component } from 'react';
import Spinner from 'components/Spinner';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import Loadable from 'react-loadable';
import styled from 'styled-components';

import logo from 'files/logo.svg';
import './App.css';

const popConfig = { stiffness: 360, damping: 25 };

const pop = {
  atEnter: {
    transitionIndex: 0,
    scale: 0.6,
    opacity: 0
  },
  atLeave: {
    scale: spring(0.6, popConfig),
    opacity: spring(0, popConfig),
    transitionIndex: 2
  },
  atActive: {
    scale: spring(1, popConfig),
    opacity: 1,
    transitionIndex: 1
  },
  mapStyles: styles => ({
    position: styles.transitionIndex <= 1 ? 'relative' : 'absolute',
    width: '100%',
    height: '100%',
    transform: `scale(${styles.scale})`,
    opacity: styles.opacity
  })
};

const LoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import('containers/HomeView'),
  loading: LoadingComponent
});

const AsyncAbout = Loadable({
  loader: () => import('containers/AboutView'),
  loading: LoadingComponent
});

const Nav = styled.nav`
  margin: 10px;

  a {
    color: #fff;
    text-decoration: none;

    &.active {
      text-decoration: underline;
    }
    & + a {
      margin-left: 10px;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello World</h1>
            <Nav>
              <NavLink exact to="/">
                <span className="navbar-item">Users</span>
              </NavLink>
              <NavLink to="/about">
                <span className="navbar-item">About</span>
              </NavLink>
            </Nav>
          </header>
          <div className="App-intro">
            <AnimatedSwitch
              atEnter={pop.atEnter}
              atLeave={pop.atLeave}
              atActive={pop.atActive}
              mapStyles={pop.mapStyles}
            >
              <Route exact path="/" component={AsyncHome} />
              <Route path="/about" component={AsyncAbout} />
            </AnimatedSwitch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

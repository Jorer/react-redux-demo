import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import Button from 'components/Button';
import Spinner from 'components/Spinner';
import UserCard from 'components/UserCard';
import { getUsers } from 'actions';

const RootElement = styled.div`
  padding: 20px;
`;

const CardList = styled(TransitionGroup)`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 400ms ease-in;
  }
`;

const Fade = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={400} classNames="fade">
    {children}
  </CSSTransition>
);

export class HomeView extends Component {
  getUsers = () => {
    this.props.getUsers();
  };

  render() {
    return (
      <RootElement>
        <h1>Users</h1>
        <Button title="get users" onClick={this.getUsers} />
        {this.props.app.busy && <Spinner />}
        <CardList>
          {this.props.app.users.map(user => {
            return (
              <Fade key={user.id}>
                <UserCard user={user} />
              </Fade>
            );
          })}
        </CardList>
      </RootElement>
    );
  }
}

function mapState(state) {
  return {
    //attr: state.reducer
    app: state.app
  };
}

function mapDispatch(dispatch) {
  return {
    //propFunction: (param) => dispatch(action(param)),
    getUsers: () => dispatch(getUsers())
  };
}

export default connect(mapState, mapDispatch)(HomeView);

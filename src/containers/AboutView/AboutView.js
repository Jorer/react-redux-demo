import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AboutView extends Component {
  render() {
    return (
      <div>
        <h1>AboutView</h1>
        <div>Everything you need to know is here.</div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    //attr: state.reducer
  };
}

function mapDispatch(dispatch) {
  return {
    //propFunction: (param) => dispatch(action(param)),
  };
}

export default connect(mapState, mapDispatch)(AboutView);

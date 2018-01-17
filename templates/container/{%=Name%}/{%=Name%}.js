import React, { Component } from 'react';
import { connect } from 'react-redux';

export class {%=Name%} extends Component {
  render() {
    return (
      <div>{%=Name %}</div>
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

export default connect(mapState, mapDispatch)({%=Name%});
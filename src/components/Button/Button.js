import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootElement = styled.button`
  padding: 10px;
  font-size: 14px;
`;

class Button extends Component {
  render() {
    return (
      <RootElement
        onClick={this.props.onClick}
      >
        {this.props.title}
      </RootElement>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  // value: PropTypes.number,
  // list: PropTypes.arrayOf(PropTypes.object)
};

Button.defaultProps = {
  title: 'example',
};

export default Button;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const RootElement = styled.div``;

class {%=Name%} extends Component {
  render() {
    return (
      <RootElement>{%=Name %}</RootElement>
    );
  }
}

{%=Name %}.propTypes = {
  // title: PropTypes.string.isRequired,
  // value: PropTypes.number,
  // list: PropTypes.arrayOf(PropTypes.object)
};

{%=Name %}.defaultProps = {
  // title: 'example',
};

export default {%=Name%};
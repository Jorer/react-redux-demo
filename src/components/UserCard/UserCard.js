import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-image';

import userIcon from 'files/user.png';

const RootElement = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const ContentElement = styled.div`
  flex: 1;
  align-self: center;

  h3 {
    margin-top: 0;
  }
`;

class UserCard extends Component {
  render() {
    const getStyle = src => {
      const preview = src.indexOf('/static/media/user') !== -1;
      let style = {
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        borderRadius: '50%',
        width: 100,
        height: 100
      };
      let image = new Image();
      image.src = src;

      return preview || !image.complete
        ? {
            ...style,
            backgroundImage: `url(${src})`,
            filter: `blur(${preview ? '3px' : '0'})`,
            transition: 'filter 800ms ease'
          }
        : {
            ...style,
            backgroundImage: `url(${src})`,
            filter: `blur(${preview ? '3px' : '0'})`,
            transition: 'filter 300ms ease'
          };
    };

    return (
      <RootElement>
        <div>
          <ProgressiveImage src={this.props.user.image} placeholder={userIcon}>
            {src => <div style={getStyle(src)} />}
          </ProgressiveImage>
        </div>
        <ContentElement>
          <h3>
            {this.props.user.firstName} {this.props.user.lastName}
          </h3>
          <div>{this.props.user.city}</div>
        </ContentElement>
      </RootElement>
    );
  }
}

UserCard.propTypes = {
  // title: PropTypes.string.isRequired,
  // value: PropTypes.number,
  // list: PropTypes.arrayOf(PropTypes.object)
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    city: PropTypes.string,
    image: PropTypes.string
  })
};

UserCard.defaultProps = {
  // title: 'example',
};

export default UserCard;

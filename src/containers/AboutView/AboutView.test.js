import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import AboutView from './AboutView';

const store = {
  dispatch: () => {},
  subscribe: () => {},
  getState: () => {
    return {
      app: {
        counter: 10,
        users: [],
        busy: false
      }
    };
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AboutView />
    </Provider>,
    div
  );
});

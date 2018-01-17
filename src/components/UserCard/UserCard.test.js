import React from 'react';
import { shallow } from 'enzyme';
import UserCard from './UserCard';

const user = {
  firstName: 'first',
  lastName: 'last',
  city: 'city',
  image: ''
};

it('renders without crashing', () => {
  shallow(<UserCard user={user} />);
});

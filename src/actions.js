import { RSAA } from 'redux-api-middleware';

import api from 'api-config';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = () => ({
  [RSAA]: {
    types: [GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE],
    endpoint: `${api.endpointLocal}/users`,
    method: 'GET'
  }
});

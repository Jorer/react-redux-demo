import { createAction, handleActions } from 'redux-actions';
import { GET_USERS, GET_USERS_SUCCESS } from 'actions';

const defaultState = {
  users: [],
  busy: false
};

const getUsers = createAction(GET_USERS);
const getUsersSuccess = createAction(GET_USERS_SUCCESS);

const reducer = handleActions(
  {
    [GET_USERS]: state => {
      return { ...state, users: [], busy: true };
    },
    [GET_USERS_SUCCESS]: (state, action) => {
      return { ...state, users: action.payload, busy: false };
    }
  },
  defaultState
);

export default reducer;
export const actions = { getUsers, getUsersSuccess };


import { ActionTypes, STATUS } from 'literals';

import { UsersState, UsersActions } from 'types';


export const userState: UsersState = {
  isAuthenticated: false,
  loginToken: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = userState, action: UsersActions) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
      };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginToken: action.payload.loginToken,
        isLoading: false,
      };
    case ActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};





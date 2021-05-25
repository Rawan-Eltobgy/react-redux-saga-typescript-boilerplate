import { ActionTypes } from "literals";
import { Action } from 'redux'

export interface UserLoginPayload {
  username: string;
  password: string;
}

export interface UserLoginSuccessPayload {
  loginToken: string;
}

export interface UserLoginFailurePayload {
  error: Error;
}

export interface UserLoginRequest extends Action {
  type: ActionTypes.USER_LOGIN_REQUEST; // !! here we assign the string literal type of the constant
  payload: UserLoginPayload
}

export interface UserLoginSuccess extends Action {
  type:  ActionTypes.USER_LOGIN_SUCCESS; // !! here we assign the string literal type of the constant
  payload: UserLoginSuccessPayload
}

export function loginSuccess(loginToken: string): UserLoginSuccess {
  return {
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload: { loginToken },
  };
}


export interface UserLoginFailure extends Action {
  type:  ActionTypes.USER_LOGIN_FAILURE; // !! here we assign the string literal type of the constant
  payload: UserLoginFailurePayload
}

export interface User {
  username: string;
  password: string;
  loginToken: string;
  loginError?: Error;
  status?: number;
}

export type UsersActions = 
| UserLoginSuccess
| UserLoginFailure
| UserLoginRequest;

  
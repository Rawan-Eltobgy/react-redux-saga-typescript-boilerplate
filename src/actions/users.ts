import { ActionTypes } from 'literals';
import { UserLoginFailure, UserLoginFailurePayload, UserLoginPayload, UserLoginRequest, UserLoginSuccess, UserLoginSuccessPayload } from 'types';

  export const userLoginRequest = (
    payload: UserLoginPayload
  ): UserLoginRequest => ({
    type: ActionTypes.USER_LOGIN_REQUEST,
    payload,
  });
  
  
  export const userLoginSuccess = (
    payload: UserLoginSuccessPayload
  ): UserLoginSuccess => ({
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload,
  });
  
  export const userLoginFailure = (
    payload: UserLoginFailurePayload
  ): UserLoginFailure => ({
    type: ActionTypes.USER_LOGIN_FAILURE,
    payload
  });
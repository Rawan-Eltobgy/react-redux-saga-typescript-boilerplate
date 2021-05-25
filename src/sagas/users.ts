/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { ActionTypes } from 'literals';
import { userLoginFailure, userLoginSuccess } from 'actions';
import { AxiosConfig, Settings } from 'config';

/**
 * Login
 */
 interface IResponse {
  loginToken: string;
  data?: any;
}

export function* loginAsync(action: any) {
  const url = `${Settings.API_URL}/login`;

  try {
    const response: IResponse = yield call(
      axios.post,
      url,
    );

    let result = response.data;

    AxiosConfig.setAccessToken(result.token);

    yield all([
      put( userLoginSuccess({
        loginToken: response.loginToken,
      })),
    ]);


  } catch (e) {
    yield put(
      userLoginFailure({
        error: e.message,
      }))

};
}
/**
 * Logout
 */
export function* logoutAsync() {
  yield delay(200);

  yield put({
    type: ActionTypes.USER_LOGOUT_SUCCESS,
  });
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN_REQUEST, loginAsync),
    takeLatest(ActionTypes.USER_LOGOUT_REQUEST, logoutAsync),
  ]);
}


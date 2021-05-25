import { Status } from 'types';

export enum ActionTypes {
  USER_LOGIN_REQUEST= 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS= 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE= 'USER_LOGIN_FAILURE',
  USER_LOGOUT_REQUEST= 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS= 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE= 'USER_LOGOUT_FAILURE',
};

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};

import { Dispatch } from 'redux';

import { AlertPosition, Icons, Status } from './common';

export interface AlertData {
  icon: Icons;
  id: string;
  message: string;
  position: AlertPosition;
  timeout: number;
}

export interface Topic {
  cached: boolean;
  data: Array<Record<string, any>>;
  message: string;
  updatedAt: number;
}

export interface AppState {
  alerts: AlertData[];
}

export interface UsersState {
  isAuthenticated: boolean;
  loginToken: string;
}

export interface StoreState {
  app: AppState;
  user: UsersState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}

import { all, fork } from 'redux-saga/effects';

import users from './users';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(users), fork(users)]);
}

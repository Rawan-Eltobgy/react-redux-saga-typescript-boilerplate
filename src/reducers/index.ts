import { combineReducers } from "redux";

import user from 'reducers/users';

const rootReducer = combineReducers({
  user,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
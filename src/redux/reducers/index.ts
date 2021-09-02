import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

type RootState = ReturnType<typeof rootReducer>;

export {
  rootReducer,
  RootState,
}
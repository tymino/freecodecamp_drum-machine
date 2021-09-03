import { combineReducers } from 'redux';

import { drumReducer } from '../reducers/drumReducer';
import { optionReducer } from '../reducers/optionReducer';

export const rootReducer = combineReducers({
  drumReducer,
  optionReducer
});

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';

import { drums } from '../reducers/drumReducer';

export const rootReducer = combineReducers({
  drums,
});

export type RootState = ReturnType<typeof rootReducer>;

// export {
//   rootReducer,
//   // RootState,
// }
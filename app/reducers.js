/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import language from 'containers/LanguageProvider/reducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    language,
    ...injectedReducers,
  });
}

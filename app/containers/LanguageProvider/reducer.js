/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_LOCALE, DEFAULT_LOCALE } from './constants';

export const initialState = fromJS({
  locale: DEFAULT_LOCALE,
  availableLocales: {
    en: 'English',
    // fa: 'فارسی',
  },
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;

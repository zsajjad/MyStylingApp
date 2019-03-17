/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
// import faLocaleData from 'react-intl/locale-data/fa'; //TODO: Add French

import { DEFAULT_LOCALE } from 'containers/LanguageProvider/constants';
import enTranslationMessages from 'translations/en.json';
// import faTranslationMessages from './translations/fa.json';

export const appLocales = ['en'];
// export const appLocales = ['en', 'fa']; //TODO: Add French

addLocaleData(enLocaleData);
// addLocaleData(faLocaleData); //TODO: Add French

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  // fa: formatTranslationMessages('fa', faTranslationMessages), //TODO: Add French
};

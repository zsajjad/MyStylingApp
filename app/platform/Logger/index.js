/* eslint-disable no-console */
import configs from 'configs';

const { LOG_API } = configs;

export function Log(...args) {
  if (!__DEV__) {
    return;
  }
  console.log(...args);
}

export function Warn(...args) {
  if (!__DEV__) {
    return;
  }
  console.warn(...args);
}

export function Error(...args) {
  if (!__DEV__) {
    return;
  }
  console.warn(...args);
}

export function Request(...args) {
  if (!__DEV__ || !LOG_API) {
    return;
  }
  console.log('### API REQUEST ###', ...args, '### API REQUEST ENDS ###');
}

export function Response(...args) {
  if (!__DEV__ || !LOG_API) {
    return;
  }
  console.log('### API RESPONSE ###', ...args, '### API RESPONSE ENDS ###');
}
/* eslint-enable no-console */

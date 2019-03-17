/**
 * Constants for Style Screen
 */

import * as constants from './constants';

export function setSelectedModel(payload) {
  return {
    type: constants.SET_SELECTED_MODEL,
    payload,
  };
}

export function addStyledImage(key, path) {
  return {
    type: constants.ADD_STYLED_IMAGE,
    payload: {
      [key]: path,
    },
  };
}

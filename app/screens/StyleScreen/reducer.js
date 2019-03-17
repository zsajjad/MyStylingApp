/**
 * Reducer for Style Screen
 */

import * as constants from './constants';

export const initialState = {
  selectedModelName: '',
  images: {},
};

export default function reducer(state, action) {
  switch (action.type) {
    case constants.SET_SELECTED_MODEL:
      return { ...state, selectedModelName: action.payload };
    case constants.ADD_STYLED_IMAGE:
      return { ...state, images: { ...state.images, ...action.payload } };
    default:
      throw new Error();
  }
}

/**
 *
 * Styles for ModelListItem
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  button: {
    marginRight: Dimensions.space2x,
    padding: Dimensions.space2x,
    paddingHorizontal: Dimensions.space3x,
    backgroundColor: Colors.translucentBlack,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    borderRadius: 22,
  },
  buttonActive: {
    backgroundColor: Colors.accentColor,
  },
  buttonText: {
    color: Colors.accentColor,
  },
  buttonTextActive: {
    color: Colors.accentColorReverse,
  },
});

export default style;

/**
 *
 * Styles for StyleScreen Screen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.accentColorReverse,
  },
  modelsList: {
    width: '100%',
    position: 'absolute',
    bottom: Dimensions.bottomSpacing + Dimensions.space3x,
  },
  modelsListContentContainer: {
    paddingHorizontal: Dimensions.space3x,
  },
  container: {
    flex: 1,
  },
});

export default style;

/**
 *
 * Styles for StyleScreen Screen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentColorReverse,
    ...StyleSheet.absoluteFillObject,
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackgroundLoading: {
    opacity: 0.5,
  },
  modelsList: {
    width: '100%',
    position: 'absolute',
    bottom: Dimensions.bottomSpacing + Dimensions.space3x,
  },
  modelsListContentContainer: {
    paddingHorizontal: Dimensions.space3x,
    paddingBottom: Dimensions.space2x,
  },
  container: {
    flex: 1,
  },
});

export default style;

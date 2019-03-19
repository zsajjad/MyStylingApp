/**
 *
 * Styles for HomeScreen Screen
 *
 */

import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
export const { screenWidth, screenHeight } = Dimensions;

export const footerGradient = {
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0 },
  locations: [0, 1],
  colors: [Colors.white, Colors.transparent],
};

const style = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Dimensions.space2x + Dimensions.headerHeight,
  },
  header: {
    fontSize: 32,
    margin: Dimensions.space3x,
    marginBottom: 0,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 14,
    fontWeight: '500',
    margin: Dimensions.space3x,
    marginTop: Dimensions.space1x,
    textAlign: 'center',
  },
  credits: {
    color: Colors.textBlack,
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    margin: Dimensions.space2x,
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: Dimensions.space2x + Dimensions.bottomSpacing,
  },
  footerBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    width: Dimensions.screenWidth,
  },
});

export default style;

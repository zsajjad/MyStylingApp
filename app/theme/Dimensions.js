import { Dimensions, Platform } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
const { height, width } = Dimensions.get('window');

const screenHeight = Platform.select({
  ios: height,
  android: Platform.Version < 21 ? height - 25 : height,
});
const statusBarHeight = getStatusBarHeight(true);
const headerHeight = statusBarHeight + 55;

const dim = {
  space1x: 6,
  space2x: 12,
  space3x: 18,
  space4x: 24,
  space5x: 30,
  space6x: 36,
  space8x: 48,
  space10x: 60,
  space12x: 72,

  radius1x: 2,
  radius2x: 4,
  radius3x: 8,
  radius4x: 12,
  radius5x: 16,

  fontHeading: 18,
  fontInput: 16,
  fontDescription: 14,
  fontCaption: 11,
  headerHeight,
  screenWidth: width,
  screenHeight,
  statusBarHeight,
  bottomSpacing: getBottomSpace(),
};

export default dim;

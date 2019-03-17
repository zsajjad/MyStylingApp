import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  background: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  scrollView: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.transparent,
  },
  scrollContentContainer: {
    paddingTop: Dimensions.headerHeight + Dimensions.space2x,
  },
  contentContainer: {
    width: Dimensions.screenWidth,
    height: Dimensions.headerHeight,
    paddingTop: Dimensions.statusBarHeight,
    paddingLeft: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 2,
    position: 'relative',
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backButtonBackground,
    borderRadius: 22,
    marginLeft: 2,
    position: 'absolute',
    left: 0,
    top: Dimensions.statusBarHeight + Dimensions.space1x,
  },
  backButtonDark: {
    backgroundColor: Colors.backButtonDarkBackground,
  },
  backButtonIcon: {
    fontSize: 24,
    color: Colors.backButtonForeground,
  },
  backButtonIconWhite: {
    color: Colors.backButtonDarkForeground,
  },
});

export default style;

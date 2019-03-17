/**
 *
 * Styles for Header
 *
 */

import { StyleSheet } from 'react-native';
import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';
import elevation from 'theme/elevation';

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    width: Dimensions.screenWidth,
    paddingRight: Dimensions.space1x,
    paddingTop: Dimensions.statusBarHeight + Dimensions.space2x,
    paddingBottom: Dimensions.space4x,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: Dimensions.headerHeight,
    position: 'absolute',
    zIndex: 1000,
    flexDirection: 'row',
    ...elevation(2),
  },
  extended: {
    height: Dimensions.headerHeight + 12,
  },
  titleHolder: {
    flex: 0.9,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: Dimensions.space1x,
  },
  actionHolder: {
    flex: 0.15,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    height: 32,
    color: Colors.white,
    marginLeft: Dimensions.space1x,
    marginBottom: Dimensions.space1x / 2,
    textAlign: 'left',
  },
  titleWhite: {
    color: Colors.white,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    marginLeft: Dimensions.space1x,
    textAlign: 'left',
    backgroundColor: Colors.transparent,
    flex: 1,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backButtonBackground,
    borderRadius: 22,
    marginLeft: 2,
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

export default styles;

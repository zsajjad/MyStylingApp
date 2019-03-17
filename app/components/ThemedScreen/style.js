import { StyleSheet, Platform } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const RIGHT_WIDTH = 44;

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
  header: {
    width: Dimensions.screenWidth,
    height: Dimensions.headerHeight * 2,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
  },
  extended: {
    // height: Dimensions.headerHeight + 36,
  },
  gradientWrapper: {
    width: Dimensions.screenWidth,
    height: Dimensions.headerHeight + 12,
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.screenWidth,
    height: Dimensions.headerHeight,
    backgroundColor: Colors.headerBackground,
  },
  elevatedHeader: {
    ...elevation(2),
  },
  headerRight: {
    flex: 1,
    maxWidth: 44,
    height: 44,
    alignItems: 'center',
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
  titleContainer: {
    marginHorizontal: Dimensions.space2x,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.headerHeight - Dimensions.statusBarHeight,
    flex: 1,
  },
  extendedTitleContainer: {
    height: 60,
  },
  titlePrefix: {
    color: Colors.headerForeground,
    fontWeight: 'bold',
    fontSize: 12,
    ...Platform.select({
      android: {
        marginBottom: -10,
        marginTop: -4,
      },
      ios: {
        marginBottom: -2,
        marginTop: -4,
      },
    }),
  },
  title: {
    color: Colors.headerForeground,
    fontWeight: '500',
    fontSize: 22,
    height: 32,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.headerForeground,
    backgroundColor: Colors.transparent,
    marginTop: Dimensions.space1x / 2,
    marginLeft: Dimensions.space1x,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: Colors.backButtonBackground,
    position: 'absolute',
    left: 0,
    top: Dimensions.statusBarHeight + Dimensions.space1x,
    // ...elevation(2),
  },
  screenTitleContainer: {
    padding: Dimensions.space2x,
    paddingLeft: 56,
    paddingTop: Dimensions.statusBarHeight + Dimensions.space1x + 3,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors.textBlack,
  },
});

export default style;

export const headerRightRange = [RIGHT_WIDTH, 0];
export const headerHeightRange = [
  Dimensions.headerHeight * 2,
  Dimensions.headerHeight + 6,
];

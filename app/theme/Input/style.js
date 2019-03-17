import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';

const INPUT_HEIGHT = 44;
const MULTILINE_HEIGHT = 130;

export const inputProps = {
  underlineColorAndroid: Colors.transparent,
  placeholderTextColor: Colors.placeholderColor,
};

export default StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: Dimensions.space1x,
    flex: 1,
    flexDirection: 'row',
    minHeight: INPUT_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  multilineContainer: {
    height: MULTILINE_HEIGHT,
  },
  input: {
    minHeight: INPUT_HEIGHT,
    flex: 1,
    marginHorizontal: Dimensions.space2x,
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    borderRadius: Dimensions.radius2x,
    borderWidth: 1,
    color: Colors.textBlack,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'center',
    position: 'relative',
    fontFamily: 'Quicksand',
  },
  label: {
    marginTop: Dimensions.space2x,
    marginHorizontal: Dimensions.space2x,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.textBlack,
  },
  blurStyle: {
    borderColor: Colors.primary2Color,
  },
  focusStyle: {
    borderColor: Colors.accentColor,
  },
  multiline: {
    height: MULTILINE_HEIGHT,
    padding: Dimensions.space2x,
    textAlignVertical: 'top',
  },
  placeholderContainer: {
    position: 'absolute',
    left: Dimensions.space3x,
    height: INPUT_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: Colors.textGrey,
    fontSize: 16,
    width: Dimensions.screenWidth - Dimensions.space12x,
  },
  labeledPlaceHolder: {
    color: Colors.primary2Color,
  },
  loaderContainer: {
    position: 'absolute',
    right: Dimensions.space1x,
    height: 44,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    marginHorizontal: Dimensions.space2x + 2,
    marginTop: -Dimensions.space1x / 2,
    borderRadius: Dimensions.radius1x,
    color: Colors.errorBackground,
    fontWeight: '600',
    fontSize: 13,
  },
});

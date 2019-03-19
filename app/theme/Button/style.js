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
  button: {
    padding: Dimensions.space4x,
    paddingVertical: Dimensions.space4x,
    margin: Dimensions.space1x,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 44,
    borderColor: Colors.accentColorReverse,
    backgroundColor: Colors.translucentWhite,
    ...elevation(3),
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.accentColorReverse,
    textTransform: 'uppercase',
  },
});

export default styles;

/**
 *
 * Text
 *
 */

import React from 'react';
import { Animated, Text as RNText, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'theme/Colors';
// import { bodyFontFamily } from 'theme/Fonts';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    // fontFamily: bodyFontFamily,
    backgroundColor: Colors.transparent,
  },
});
// eslint-disable-next-line
function Text({ animated, style: componentStyles, ...props }) {
  const Component = animated ? Animated.Text : RNText;
  let style = [defaultStyle.fontFamily];
  if (componentStyles && Array.isArray(componentStyles)) {
    style = style.concat(componentStyles);
  } else if (componentStyles) {
    style.push(componentStyles);
  }
  return <Component style={style} {...props} />;
}

Text.propTypes = {
  children: PropTypes.any,
  animated: PropTypes.bool,
};
Text.defaultProps = {
  children: null,
  animated: false,
};

export default Text;

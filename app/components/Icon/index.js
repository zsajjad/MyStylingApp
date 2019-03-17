/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const AnimatedFeather = Animated.createAnimatedComponent(Feather);

function IconWrapper({ animated, font, ...props }) {
  if (animated) {
    return <AnimatedFeather {...props} />;
  }
  return <Feather {...props} />;
}

IconWrapper.propTypes = {
  animated: PropTypes.bool,
  font: PropTypes.oneOf(['feather']),
};

IconWrapper.defaultProps = {
  animated: false,
  font: 'feather',
};

export default IconWrapper;

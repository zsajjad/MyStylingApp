import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import Colors from 'theme/Colors';

const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedNative = Animated.createAnimatedComponent(
  TouchableNativeFeedback,
);

const RIPPLE = Platform.OS === 'android' && Platform.Version >= 21;

// eslint-disable-next-line
class TouchFeedback extends React.Component {
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    let Component = RIPPLE ? TouchableNativeFeedback : TouchableOpacity;
    let NativeChild = View;
    if (this.props.animated) {
      Component = RIPPLE ? AnimatedNative : AnimatedOpacity;
      if (RIPPLE) {
        NativeChild = Animated.View;
      }
    }
    if (RIPPLE) {
      return (
        <Component
          {...this.props}
          background={TouchableNativeFeedback.Ripple(
            Colors.rippleColor,
            this.props.ripple,
          )}
        >
          <NativeChild style={this.props.style}>
            {this.props.children}
          </NativeChild>
        </Component>
      );
    }
    return <Component {...this.props}>{this.props.children}</Component>;
  }
}

TouchFeedback.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.node.isRequired,
  ripple: PropTypes.bool,
  animated: PropTypes.bool,
};

TouchFeedback.defaultProps = {
  style: {},
  ripple: false,
  animated: false,
};

export default TouchFeedback;

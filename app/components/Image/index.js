/**
 *
 * Image
 *
 */
import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Image, ImageBackground } from 'react-native';
import Images from 'images';

function Img({ local, title, uri, animated, background, ...props }) {
  let source = {};
  if (uri) {
    source = { uri };
  } else {
    source = get(Images, title);
  }
  let Comp = Image;
  if (background) {
    Comp = ImageBackground;
  } else if (animated) {
    Comp = Animated.Image;
  }
  return (
    <Comp
      resizeMethod="resize"
      source={source}
      resizeMode="contain"
      {...props}
    />
  );
}

Img.propTypes = {
  local: PropTypes.bool,
  title: PropTypes.string,
  uri: PropTypes.string,
  animated: PropTypes.bool,
  background: PropTypes.bool,
};

Img.defaultProps = {
  local: false,
  title: 'logoThumb',
  uri: '',
  animated: false,
  background: false,
};

export default Img;

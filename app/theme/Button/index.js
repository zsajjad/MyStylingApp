/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { View } from 'react-native';

import Text from 'components/Text';
import TouchFeedback from 'theme/TouchFeedback';
import style from './style';

function Button({ label, ...props }) {
  return (
    <TouchFeedback style={style.button} {...props}>
      <Text style={style.label}>{label}</Text>
    </TouchFeedback>
  );
}

Button.propTypes = {
  label: PropTypes.element.isRequired,
};

export default Button;

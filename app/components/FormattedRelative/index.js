/**
 *
 * FormattedDate
 *
 */

import React, { PureComponent } from 'react';
import { Animated, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FormattedRelative, injectIntl, intlShape } from 'react-intl'; //eslint-disable-line

// eslint-disable-next-line
class Formatted extends PureComponent {
  render() {
    const { animated, intl, value, ...props } = this.props;
    const Component = animated ? Animated.Text : Text;
    return <Component {...props}>{intl.formatRelative(value)}</Component>;
  }
}

Formatted.propTypes = {
  intl: intlShape.isRequired, //eslint-disable-line
  value: PropTypes.any,
  animated: PropTypes.bool,
};

Formatted.defaultProps = {
  value: new Date(),
  animated: false,
};

export default injectIntl(Formatted);

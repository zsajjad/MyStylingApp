/**
 *
 * FormattedMessage
 *
 */

import React from 'react';
import { Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl'; //eslint-disable-line

// eslint-disable-next-line
function Message(props) {
  const {
    animated,
    intl,
    id,
    defaultMessage,
    values,
    isFragment,
    ...otherProps
  } = props;

  if (isFragment) {
    return (
      <React.Fragment>
        {intl.formatMessage({ id, defaultMessage }, values)}
      </React.Fragment>
    );
  }

  const Component = animated ? Animated.Text : Text;
  return (
    <Component {...otherProps}>
      {intl.formatMessage({ id, defaultMessage }, values)}
    </Component>
  );
}

Message.propTypes = {
  intl: intlShape.isRequired,
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string.isRequired,
  values: PropTypes.object,
  animated: PropTypes.bool,
  isFragment: PropTypes.bool,
};

Message.defaultProps = {
  values: {},
  animated: false,
  isFragment: false,
};

export default injectIntl(Message);

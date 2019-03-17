/**
 *
 * FormattedDate
 *
 */

import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { FormattedDate, injectIntl, intlShape } from 'react-intl'; //eslint-disable-line

// eslint-disable-next-line
class Formatted extends PureComponent {
  render() {
    const { intl, date, format, ...props } = this.props;
    return <Text {...props}>{intl.formatDate(date, format)}</Text>;
  }
}

Formatted.propTypes = {
  intl: intlShape.isRequired, //eslint-disable-line
  date: PropTypes.any,
  format: PropTypes.object,
};

Formatted.defaultProps = {
  date: new Date(),
  format: {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    formatMatcher: 'basic',
  },
};

export default injectIntl(Formatted);

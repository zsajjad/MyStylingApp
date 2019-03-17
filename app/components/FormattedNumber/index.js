/**
 *
 * FormattedNumber
 *
 */

import React from 'react';
import { Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

import { FormattedNumber, injectIntl, intlShape } from 'react-intl'; //eslint-disable-line

function abbreviateNumber(value) {
  const suffixes = ['', 'k', 'm', 'b', 't'];
  const suffixNum = Math.floor(`${value}`.length / 3);
  const shortValue = parseFloat(
    // eslint-disable-next-line no-restricted-properties
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
      2,
    ),
  );
  return shortValue + suffixes[suffixNum];
}

// eslint-disable-next-line
class Number extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    value: PropTypes.number.isRequired,
    format: PropTypes.string,
    animated: PropTypes.bool,
    numberStyle: PropTypes.oneOf(['decimal', 'currency', 'percent']),
    currency: PropTypes.string,
    abbreviate: PropTypes.bool,
  };

  static defaultProps = {
    numberStyle: 'decimal',
    animated: false,
    format: '',
    currency: 'PKR',
    abbreviate: false,
  };

  render() {
    const {
      animated,
      intl,
      value,
      format,
      numberStyle,
      currency,
      abbreviate,
      ...props
    } = this.props;
    const Component = animated ? Animated.Text : Text;
    if (abbreviate) {
      return <Component {...props}>{abbreviateNumber(value)}</Component>;
    }
    return (
      <FormattedNumber
        value={value}
        format={format}
        style={numberStyle}
        currency={currency}
        currencyDisplay="symbol"
        maximumFractionDigits={0}
        minimumFractionDigits={0}
      >
        {(v) => <Component {...props}>{v}</Component>}
      </FormattedNumber>
    );
  }
}

export default injectIntl(Number);

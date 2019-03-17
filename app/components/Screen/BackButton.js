/**
 *
 * HeaderBackButton
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import TouchFeedback from 'theme/TouchFeedback';

import Icon from 'components/Icon';

import style from './style';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderBackButton extends React.PureComponent {
  handleBackPress = () => {
    if (this.props.navigation) {
      this.props.navigation.goBack();
      return;
    }
    this.props.onPress();
  };

  render() {
    if (!this.props.navigation && !this.props.onPress) {
      return null;
    }
    return (
      <TouchFeedback
        style={[
          style.backButton,
          this.props.dark && style.backButtonDark,
          this.props.style,
        ]}
        onPress={() => this.handleBackPress()}
      >
        <Icon
          name="arrow-left"
          style={[
            style.backButtonIcon,
            this.props.dark && style.backButtonIconWhite,
          ]}
        />
      </TouchFeedback>
    );
  }
}

HeaderBackButton.propTypes = {
  navigation: PropTypes.object,
  onPress: PropTypes.func,
  dark: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

HeaderBackButton.defaultProps = {
  onPress: null,
  navigation: null,
  dark: false,
  style: {},
};

export default HeaderBackButton;

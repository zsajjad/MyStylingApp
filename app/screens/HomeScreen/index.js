/*
 *
 * HomeScreen
 *
 */

import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';

import messages from './messages';
// import style from './style';

function HomeScreen(screenProps) {
  return (
    <Screen
      navigation={screenProps.navigation}
      title={(titleProps) => (
        <FormattedMessage {...messages.header} {...titleProps} />
      )}
      testID="homeScreen"
    >
      <View />
    </Screen>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;

/**
 *
 * Screen
 *
 */
import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import BackButton from './BackButton';

import style from './style';

function Screen(props) {
  return [
    props.wrapInScroll ? (
      <ScrollView
        testID={props.testID}
        scrollEventThrottle={32}
        style={style.scrollView}
        contentContainerStyle={[
          style.scrollContentContainer,
          props.contentContainerStyle,
        ]}
        key="scroll"
        bounces={false}
        ref={props.scrollRef}
      >
        {props.children}
      </ScrollView>
    ) : (
      props.children
    ),
    <BackButton
      key="backButton"
      navigation={props.navigation}
      style={style.backButton}
      dark
    />,
  ];
}

Screen.propTypes = {
  testID: PropTypes.string.isRequired,
  children: PropTypes.any,
  navigation: PropTypes.object,
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  scrollRef: PropTypes.func,
  wrapInScroll: PropTypes.bool,
};

Screen.defaultProps = {
  wrapInScroll: true,
  contentContainerStyle: {},
};

export default Screen;

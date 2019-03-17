/**
 *
 * App Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

// import { translationMessages } from 'i18n';
import Router from 'router';

// import NoNetworkThumb from 'components/NoNetworkThumb';

export default class App extends React.PureComponent {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return <Router />;
  }
}

App.propTypes = {};

App.defaultProps = {};

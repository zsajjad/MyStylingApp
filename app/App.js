/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { useScreens } from 'react-native-screens';

import { Warn } from 'platform/Logger';

import LanguageProvider from 'containers/LanguageProvider';

import Router from 'router';
import configureStore from './configureStore';
import { translationMessages } from './i18n';

const store = configureStore();
useScreens();
export default class App extends React.Component {
  componentDidCatch(e) {
    Warn(e);
  }

  render() {
    return (
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <React.Fragment>
            <StatusBar
              animated
              barStyle="dark-content"
              backgroundColor="white"
            />
            <Router />
          </React.Fragment>
        </LanguageProvider>
      </Provider>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

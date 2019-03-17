/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Intl from 'intl'; // eslint-disable-line
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import 'intl/locale-data/jsonp/en';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import reducer from './reducer';

import makeSelectLanguage from './selectors';
import { changeLocale } from './actions';

export class LanguageProvider extends PureComponent {
  render() {
    return (
      <IntlProvider
        locale={this.props.language.locale}
        key={this.props.language.locale}
        textComponent={Text}
        messages={this.props.messages[this.props.language.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  language: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    availableLocales: PropTypes.object.isRequired,
  }).isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  // changeLocale: PropTypes.func.isRequired,
};

LanguageProvider.defaultProps = {};

const mapStateToProps = createStructuredSelector({
  language: makeSelectLanguage(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: (...args) => dispatch(changeLocale(...args)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'language', reducer });

export default compose(
  withReducer,
  withConnect,
)(LanguageProvider);

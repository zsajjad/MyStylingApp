import React from 'react';
import renderer from 'react-test-renderer';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Provider } from 'react-redux';

import ConnectedLanguageProvider, { LanguageProvider } from '../index';
import configureStore from '../../../configureStore';

import { translationMessages } from '../../../i18n';

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    en: 'This is some en message',
  },
});

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    // eslint-disable-next-line
    const renderedComponent = renderer.create(
      <LanguageProvider messages={messages} locale="en">
        {children}
      </LanguageProvider>,
    );
    expect(renderedComponent.toJSON().type).toEqual('h1');
  });
});

describe('<ConnectedLanguageProvider />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render the default language messages', () => {
    // eslint-disable-next-line
    const renderedComponent = renderer.create(
      <Provider store={store}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </ConnectedLanguageProvider>
      </Provider>,
    );
    expect(renderedComponent.toJSON().children[0]).toEqual(
      'This is some default message',
    );
  });
});

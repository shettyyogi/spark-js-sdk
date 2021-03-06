import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {addLocaleData, IntlProvider} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import messages from './locales/en';
import ChatWidget from './containers/chat-widget';
import store from './store';

export default function Root({accessToken, userId}) {
  addLocaleData(enLocaleData);

  return (
    <Provider store={store}>
      <IntlProvider locale={`en`} messages={messages}>
        <ChatWidget accessToken={accessToken} userId={userId} />
      </IntlProvider>
    </Provider>
  );
}

Root.propTypes = {
  accessToken: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};

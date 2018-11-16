import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import webFontConfig from './config/webfonts';
import Routes from './views/routes';
import configureStore from './state';
import colors from './constants/colors';

/* eslint-disable no-unused-expressions */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${colors.background};
  }
  * {
    box-sizing: border-box;
  }
  #app {
    min-height: 100%
  }
`;
/* eslint-enable no-unused-expressions */

const store = configureStore();
const history = createHistory();

WebFont.load(webFontConfig);

render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

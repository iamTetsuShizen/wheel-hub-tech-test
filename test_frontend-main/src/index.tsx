import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ContextProvider } from './context';
import * as serviceWorker from './serviceWorker';

import './helpers/i18n';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

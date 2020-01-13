import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from '~/store/index';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoclose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

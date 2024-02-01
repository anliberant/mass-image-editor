import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './assets/index.css';
import Layout from './layout/Layout';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  </React.StrictMode>
);

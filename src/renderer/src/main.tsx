import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/index.css';
import App from './App';
import Layout from './layout/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);

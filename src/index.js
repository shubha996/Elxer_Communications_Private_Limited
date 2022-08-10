import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/consent.min.css';
import './assets/css/style.bundle.min.css';
import './assets/css/style.min.css';
import ReactDOM from 'react-dom/client';
import Controller from './Controller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Controller/>
  </React.StrictMode>
);

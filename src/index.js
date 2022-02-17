import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import App from './App';
// eslint-disable-next-line
import app from './firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
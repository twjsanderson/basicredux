// root level setup
// index.js is the setup file
// renders to root
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />, document.querySelector('#root')
);

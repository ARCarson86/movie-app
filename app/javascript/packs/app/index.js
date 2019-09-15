import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import './assets/stylesheets/app.scss';
import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppRouter />, document.getElementById('app'),
  )
});

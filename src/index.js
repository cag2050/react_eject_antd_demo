import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import history from './history';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>, document.getElementById('root'));
registerServiceWorker();

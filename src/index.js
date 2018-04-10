import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import history from './history';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import history from './projectTools/history';
import './index.css';
import App from './App';
import registerServiceWorker from './projectTools/registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

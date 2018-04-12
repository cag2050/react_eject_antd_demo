import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import history from './projectTools/history';
import './index.css';
import App from './App';
import registerServiceWorker from './projectTools/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import Login from "./components/Login";
// import { Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={App}/>
        <Route key='/login' exact path='/login' component={Login}/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

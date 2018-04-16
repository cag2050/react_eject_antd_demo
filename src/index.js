import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
} from 'react-router';
import history from './projectTools/history';
import './index.css';
import App from './App';
import registerServiceWorker from './projectTools/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import Login from "./components/Login";
import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('config =')
  console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('response =')
  console.log(response)
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

axios.get('/aaa')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route component={App}/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

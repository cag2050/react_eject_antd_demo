import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
  // Redirect
} from 'react-router';
import history from './projectTools/history';
import './index.css';
import App from './App';
import registerServiceWorker from './projectTools/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import Login from "./components/Login";
import NotFound from './components/NotFound'
// import { Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/*' exact component={App}/>
        <Route key='/login' exact path='/login' component={Login}/>
        <Route component={NotFound}/>
        {/*<Redirect from='*' to='/not_found' />*/}
      </Switch>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

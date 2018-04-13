import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// let isLogin = false

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('isLogin') === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location}
          }}
        />
      )
    }
  />
);

export default PrivateRoute

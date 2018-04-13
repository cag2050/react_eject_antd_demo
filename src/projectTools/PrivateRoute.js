import React from 'react'
import { Route, Redirect } from 'react-router-dom'

let a = 'aaa'
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      a === 'aaa222' ? (
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

import React from 'react';
import Bundle from './projectTools/bundle';

export default [
  {
    path: '/',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/ButtonDemo')}/>;
    }
  },
  {
    path: '/input',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/InputDemo')}/>;
    }
  },
  // {
  //   path: '/login',
  //   component(props) {
  //     return <Bundle {...props} load={() => import('./components/Login')}/>;
  //   }
  // },
  {
    path: '/private_route',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/PrivateRouteDemo')} />;
    }
  },
  {
    path: '/not_found',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/NotFound')} />;
    }
  }
];

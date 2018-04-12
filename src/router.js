import React from 'react';
import Bundle from './bundle';

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
    component(props) {
      return <Bundle {...props} load={() => import('./components/PrivateRouteDemo')} />;
    }
  }
];

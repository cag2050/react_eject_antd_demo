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
  {
    path: '/private_route',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/PrivateRouteDemo')} />;
    }
  },
  {
    path: '/table',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/TableDemo')} />;
    }
  },
  {
    path: '/component',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('./components/componentDemo')} />;
    }
  }
];

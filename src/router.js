import React from 'react';
import Bundle from './bundle';

export default [
  {
    path: '/',
    exact: true,
    // component: ButtonDemo
    component(props) {
      return <Bundle {...props} load={() => import('./components/ButtonDemo')} />;
    }
  }, {
    path: '/input',
    // component: InputDemo
    component(props) {
      return <Bundle {...props} load={() => import('./components/InputDemo')} />;
    }
  }
];

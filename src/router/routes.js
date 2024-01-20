import React from 'react';
import Movies from '@/pages/Movies';
import Home from '@/pages/Home';
import Front from '../pages/Front';
import NotFound from '@/pages/NotFound';
import Admin from '../pages/Admin';
import User from '../pages/Admin/User';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/',
    element: <Front />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'user',
        element: <User />,
      },
    ]
  },
  {
    path: '/*',
    element: <NotFound />,
  }
];

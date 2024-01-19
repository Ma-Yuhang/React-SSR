import React from 'react';
import Movies from '@/pages/Movies';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <Navigate to="home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

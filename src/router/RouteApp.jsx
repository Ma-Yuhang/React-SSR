import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
export default function RouteApp() {
  const element = useRoutes(routes);
  return <div>{element}</div>;
}

import React from 'react';
import RouteApp from '@/router/RouteApp';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

export default function App({ location, store }) {
  return (
    <Provider store={store}>
      <StaticRouter location={location}>
        <RouteApp />
      </StaticRouter>
    </Provider>
  );
}

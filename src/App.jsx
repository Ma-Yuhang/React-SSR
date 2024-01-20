import React from 'react';
import RouteApp from '@/router/RouteApp';
import '@/asset/global.css';
import { StaticRouter } from 'react-router-dom/server';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import { Provider } from 'react-redux';
export default function App({ location, context }) {
  return (
    <Provider store={store}>
      {global.document ? (
        // 客户端
        <BrowserRouter>
          <RouteApp />
        </BrowserRouter>
      ) : (
        // 服务端
        <StaticRouter location={location} context={context}>
          <RouteApp />
        </StaticRouter>
      )}
    </Provider>
  );
}

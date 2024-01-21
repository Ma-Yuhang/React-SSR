import React from 'react';
import RouteApp from '@/router/RouteApp';
import '@/asset/global.css';
import { BrowserRouter } from 'react-router-dom';
import createStore from '@/store';
// import store from '@/store';
import { Provider } from 'react-redux';

const store = createStore()
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>
  );
}

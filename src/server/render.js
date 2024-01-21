import React from 'react';
import ReactDOM from 'react-dom/server';
import getHtml from './getHtml';
import App from './App';
import loadData from './loadData';
import createStore from '@/store';


export default async function (req, res) {
  const store = createStore()

  await loadData(req.path, store)
  const componentHTML = ReactDOM.renderToString(
    <App location={req.path} store={store} />
  );
  const html = getHtml(componentHTML, req.path, store)
  res.send(html);
}

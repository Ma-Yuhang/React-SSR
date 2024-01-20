import React from 'react';
import ReactDOM from 'react-dom/server';
import getHtml from './getHtml';
import App from '@/App';

export default function (req, res) {
  const context = {}
  const componentHTML = ReactDOM.renderToString(<App location={req.path} context={context} />);
  const html = getHtml(componentHTML)
  res.send(html);
}

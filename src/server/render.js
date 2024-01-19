import React from 'react';
import ReactDOM from 'react-dom/server';
import getScripts from './getScripts';
import App from './App';
import getLinks from './getLinks';
export default function (req, res) {
  const context = {}
  const componentHTML = ReactDOM.renderToString(<App location={req.path} context={context}/>);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${getLinks()}
    <title>Document</title>
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    ${getScripts()}
  </body>
  </html>`;
  res.send(html);
}

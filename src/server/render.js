import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './App';
export default function (req, res) {
  const componentHTML = ReactDOM.renderToString(<App></App>);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    <script src="./js/client.js"></script>
  </body>
  </html>`;
  res.send(html);
}

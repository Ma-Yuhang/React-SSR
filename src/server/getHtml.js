import getScripts from './getScripts';
import getLinks from './getLinks';

export default function (componentHTML, path, store) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${getLinks()}
    <title>Document</title>
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    <script>
      window.pageDatas = ${JSON.stringify(store.getState())}
      window.requestPath = '${path}'
    </script>
    ${getScripts()}
  </body>
  </html>`;
}
import getScripts from './getScripts';
import getLinks from './getLinks';
import { getMovies } from '@/api';


export default function (componentHTML) {
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
    ${getScripts()}
  </body>
  </html>`;
}
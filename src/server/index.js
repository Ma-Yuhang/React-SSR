import express from 'express';
import render from './render';
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express();

app.use(express.static('./public'));

app.use('/api', createProxyMiddleware({ target: 'http://yuanjin.tech:5005/', changeOrigin: true }));

app.get('*', render);



app.listen(8888, () => {
  console.log('8888服务已启动');
});

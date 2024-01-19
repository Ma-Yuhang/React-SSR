import express from 'express';
import render from './render';
const app = express();

app.use(express.static('./public'));
app.get('*', render);



app.listen(8888, () => {
  console.log('8888服务已启动');
});

import express from 'express';
import { routerLouder } from './routerLoader';
// import { userRouter } from './modules/user/user.controller.js';
// import { productRouter } from './modules/product/product.controler.js';

const app = express();

app.use(express.json());

// app.use(userRouter);
// app.use(productRouter);

routerLouder(app);

app.listen(8080, function () {
  console.log('Servidor rodando na porta 8080');
});

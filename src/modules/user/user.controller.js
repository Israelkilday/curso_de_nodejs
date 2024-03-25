import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', async function (req, res) {
  const prisma = new PrismaClient();
  res.send('Hello World USER NOW');
});

router.get('/:user_name', function (req, res) {
  res.send('Nome do Usuário');
});

export default userRouter;

// import { Request, Response, Router } from 'express';
// import { createUser, getUsers } from './user.servivce';
// import { UseInsertDTO } from './dtos/user-insert.dto';
// // import { NotFoundException } from '@exceptions/not-found-exception';
// import { ReturnError } from '@exceptions/dtos/return-error.dto';

// const userRouter = Router();

// const router = Router();

// userRouter.use('/user', router);

// router.get('/', async (_, res: Response): Promise<void> => {
//   const users = await getUsers().catch((error) => {
//     new ReturnError(res, error);
//   });
//   res.send(users);
// });

// router.post(
//   '/',
//   async (req: Request<undefined, undefined, UseInsertDTO>, res: Response): Promise<void> => {
//     const user = await createUser(req.body).catch((error) => {
//       new ReturnError(res, error);
//     });
//     res.send(user);
//   },
// );

// export default userRouter;

import { Request, Response, Router } from 'express';
import { createUser, getUsers } from './user.servivce';
import { UseInsertDTO } from './dtos/user-insert.dto';
// import { NotFoundException } from '@exceptions/not-found-exception';
import { ReturnError } from '@exceptions/dtos/return-error.dto';
import { NotFoundException } from '@exceptions/not-found-exception';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', async (_, res: Response): Promise<void> => {
  const users = await getUsers().catch((error) => {
    if (error instanceof NotFoundException) {
      res.status(204);
    } else {
      new ReturnError(res, error);
    }
  });
  res.send(users);
});

router.post(
  '/',
  async (req: Request<undefined, undefined, UseInsertDTO>, res: Response): Promise<void> => {
    const user = await createUser(req.body).catch((error) => {
      new ReturnError(res, error);
    });
    res.send(user);
  },
);

export default userRouter;

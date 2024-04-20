import { Request, Response, Router } from 'express';
import { createUser, getUsers } from './user.servivce';
import { UseInsertDTO } from './dtos/user-insert.dto';
import { ReturnError } from '@exceptions/dtos/return-error.dto';
import { NotFoundException } from '@exceptions/not-found-exception';
import { authMiddleware } from '@middlewares/auth.middlaware';

const createUserController = async (
  req: Request<undefined, undefined, UseInsertDTO>,
  res: Response,
): Promise<void> => {
  const user = await createUser(req.body).catch((error) => {
    new ReturnError(res, error);
  });
  res.send(user);
};

const getUsersController = async (req: Request, res: Response): Promise<void> => {
  const users = await getUsers().catch((error) => {
    if (error instanceof NotFoundException) {
      res.status(204);
    } else {
      new ReturnError(res, error);
    }
  });
  res.send(users);
};

const userRouter = Router();
const router = Router();

userRouter.use('/user', router);

router.post('/', createUserController);
router.use(authMiddleware);
router.get('/', getUsersController);

export default userRouter;

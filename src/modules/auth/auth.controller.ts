import { Router, Request, Response } from 'express';
import { AuthDTO } from './dtos/auth.dto';
import { validateAuth } from './auth.service';
import { ReturnError } from '@exceptions/dtos/return-error.dto';

const authRouter = Router();

const router = Router();

authRouter.use('/auth', router);

router.post(
  '/',
  async (req: Request<undefined, undefined, AuthDTO>, res: Response): Promise<void> => {
    const user = await validateAuth(req.body).catch((error) => {
      new ReturnError(res, error);
    });

    res.send(user);
  },
);

// router.post(
//   '/',
//   async (req: Request<undefined, undefined, AuthDTO>, res: Response): Promise<void> => {
//     try {
//       const user = await validateAuth(req.body);
//       res.send(user);
//     } catch (error) {
//       const returnError = new ReturnError(error);
//       returnError.sendResponse(res);
//       return;
//     }
//   },
// );

export default authRouter;

// res.status(401).send({ error: 'Invalid credentials' });

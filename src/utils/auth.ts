import { UserModel } from '@modules/user/user.model';
import { sign } from 'jsonwebtoken';

const PASSWORD_JWT = 'senhamuitograndeparamudardepois';

export const generateToken = (user: UserModel): string => {
  return sign(
    {
      userId: user.id,
      email: user.email,
      typeUser: user.typeUser,
    },
    PASSWORD_JWT,
    {
      subject: String(user.id),
      expiresIn: '604800000',
    },
  );
};

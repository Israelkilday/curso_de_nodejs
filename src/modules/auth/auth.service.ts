import { UserModel } from '@modules/user/user.model';
import { AuthDTO } from './dtos/auth.dto';
import { getUserByEmail } from '@modules/user/user.servivce';

export const validateAuth = async (authDto: AuthDTO): Promise<UserModel> => {
  const user = getUserByEmail(authDto.email);

  return user;
};

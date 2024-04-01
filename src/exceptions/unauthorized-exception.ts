import { AppException } from './app-exception';

export class UnauthorizedException extends AppException {
  constructor() {
    super('User whithout permission', 401);
  }
}

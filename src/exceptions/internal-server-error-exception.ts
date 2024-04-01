import { AppException } from './app-exception';

export class InternalServerErrorException extends AppException {
  constructor() {
    super('Internal srver error', 500);
  }
}

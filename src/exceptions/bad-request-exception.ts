import { AppException } from './app-exception';

export class BadrequestException extends AppException {
  constructor(message: string) {
    super(message, 400);
  }
}

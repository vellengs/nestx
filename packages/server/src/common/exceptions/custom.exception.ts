import { HttpException, HttpStatus } from '@nestjs/common';

type Options =
  | {
      message: string;
      error?: any;
    }
  | string;
export class CustomException extends HttpException {
  constructor(options: Options, statusCode?: HttpStatus) {
    super(options, statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

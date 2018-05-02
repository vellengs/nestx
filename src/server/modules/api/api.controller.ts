import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../../cats/cats.service';

@Controller('api/hello')
export class ApiController {
  constructor() { }

  @Get('hello')
  root() {

    return {
      message: 'Hello World!',
    };
  }
}

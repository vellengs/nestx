import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Tags } from 'nest-swagger';

@Tags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(): string {
    return this.appService.root();
  }
}

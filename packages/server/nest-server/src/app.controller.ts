import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Tags } from 'nest-swagger';
import { SettingsGroup } from './core/dto';

@Tags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('name/:name')
  async getAppSettings(@Query('name') name?: string): Promise<SettingsGroup> {
    return this.appService.getAppSettings(name);
  }

  @Get()
  root(): string {
    return this.appService.root();
  }
}

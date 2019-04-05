import { Controller, Get, Post } from '@nestjs/common';
import { Tags } from 'nest-swagger';
import { MockService } from './mock.service';

@Tags('mock')
@Controller('mock')
export class MockController {
  constructor(private readonly mockService: MockService) { }

  @Get('init')
  initData(): Promise<boolean> {
    return this.mockService.initDatabase();
  }

  @Get('reset')
  reset(): Promise<boolean> {
    return this.mockService.resetDatabase();
  }
}

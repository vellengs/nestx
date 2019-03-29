import {
  Controller,
  Get,
  Body,
  Post,
  Query,
  ParseIntPipe,
  Param
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class DemoController {
  constructor(private readonly appService: AppService) {}

  @Get()
  example(): string {
    return null;
  }
}

import { Controller, Get, UseGuards, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ResultList } from './../../common/interfaces/result.interface';
import { LogsService } from './logs.service';
import { Log } from './../interfaces';
import { KeyValueDto } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('logs')
@UseGuards(AuthGuard('jwt'))
export class LogsController {
  constructor(private readonly logService: LogsService) { }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.logService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('index', new ParseIntPipe()) index: number = 1,
    @Query('size', new ParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Log>> {
    return this.logService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Log> {
    return this.logService.findById(id);
  }

}

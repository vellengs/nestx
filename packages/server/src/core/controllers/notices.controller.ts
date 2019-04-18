import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  Put,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { NoticesService } from './notices.service';
import { Notice } from './../interfaces';
import { KeyValueDto, CreateNoticeReq, EditNoticeReq } from './../dto';
import { Tags } from 'nest-swagger';
import { ResultList, NullableParseIntPipe, RolesGuards } from './../../common';

@Tags('core')
@Controller('notice')
@UseGuards(AuthGuard('jwt'), RolesGuards('notice'))
export class NoticesController {
  constructor(private readonly noticeService: NoticesService) {}

  @Post()
  async create(@Body() entry: CreateNoticeReq) {
    return this.noticeService.create(plainToClass(CreateNoticeReq, entry));
  }

  @Put()
  async update(@Body() entry: EditNoticeReq): Promise<Notice> {
    return this.noticeService.update(plainToClass(EditNoticeReq, entry));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.noticeService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<Notice>> {
    return this.noticeService.querySearch(keyword, page, size, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Notice> {
    return this.noticeService.findById(id);
  }
}

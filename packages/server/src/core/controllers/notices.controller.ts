import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { NoticesService } from './notices.service';
import { Notice } from './../interfaces';
import { KeyValueDto, CreateNoticeReq, EditNoticeReq } from './../dto';
import { Tags } from 'nest-swagger';
import { ResultList, NullableParseIntPipe } from './../../common';

@Tags('core')
@Controller('notices')
@UseGuards(AuthGuard('jwt'))
export class NoticesController {
  constructor(private readonly noticeService: NoticesService) { }

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
    @Query('index', new NullableParseIntPipe()) index: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Notice>> {
    return this.noticeService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Notice> {
    return this.noticeService.findById(id);
  }

}

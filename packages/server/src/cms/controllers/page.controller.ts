import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Tags } from 'nest-swagger';
import { PageService } from './page.service';
import { CreatePageDto, PageRes, EditPageDto } from './../dto';
import { NullableParseIntPipe, ResultList } from './../../common';
import { Page } from './../interfaces';
import { KeyValueDto } from './../../core/dto';

@Tags('cms')
@Controller('page')
export class PageController {
  constructor(private readonly service: PageService) {}

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.service.search(keyword, value);
  }

  @Post()
  async create(entry: CreatePageDto): Promise<PageRes> {
    return this.service.create(entry);
  }

  @Put()
  async update(entry: EditPageDto): Promise<PageRes> {
    return this.service.update(entry);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<PageRes>> {
    return this.service.querySearch(keyword, page, size, sort);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Page> {
    return this.service.findById(id);
  }
}

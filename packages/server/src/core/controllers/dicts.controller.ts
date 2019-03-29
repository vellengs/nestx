import { Controller, Get, Post, Body, UseGuards, Param, Put, ParseIntPipe, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList } from './../../common/interfaces/result.interface';
import { DictsService } from './dicts.service';
import { Dict } from './../interfaces/dict.interface';
import { CreateDictReq, EditDictReq, KeyValueDto } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('dicts')
@UseGuards(AuthGuard('jwt'))
export class DictsController {
  constructor(private readonly dictService: DictsService) { }

  @Post()
  async create(@Body() entry: CreateDictReq) {
    return this.dictService.create(plainToClass(CreateDictReq, entry));
  }

  @Put()
  async update(@Body() entry: EditDictReq): Promise<Dict> {
    return this.dictService.update(plainToClass(EditDictReq, entry));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.dictService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('index', new ParseIntPipe()) index: number = 1,
    @Query('size', new ParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Dict>> {
    return this.dictService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dict> {
    return this.dictService.findById(id);
  }

}

import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList, NullableParseIntPipe } from './../../common';
import { DictsService } from './dicts.service';
import { Dict } from './../interfaces/dict.interface';
import { CreateDictReq, EditDictReq, KeyValueDto } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('dict')
@UseGuards(AuthGuard('jwt'))
export class DictsController {
  constructor(private readonly dictService: DictsService) {}

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
    @Query('category') category?: string,
  ): Promise<KeyValueDto[]> {
    return this.dictService.search(
      keyword,
      value,
      category,
      10,
      'name',
      'category',
    );
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('category') category?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<Dict>> {
    return this.dictService.querySearch(keyword, category, page, size, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dict> {
    return this.dictService.findById(id);
  }
}

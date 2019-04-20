import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Tags } from 'nest-swagger';
import { CategoryService } from './category.service';
import { KeyValue } from 'common/types/data.types';
import { CreateCategoryDto, CategoryRes, EditCategoryDto } from '../dto';
import { NullableParseIntPipe, ResultList, TreeNode } from '../../common';
import { Category } from '../interfaces';
import { KeyValueDto } from './../../core/dto';

@Tags('cms')
@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.service.search(keyword, value);
  }

  @Post()
  async create(@Body() entry: CreateCategoryDto): Promise<CategoryRes> {
    return this.service.create(entry);
  }

  @Put()
  async update(@Body() entry: EditCategoryDto): Promise<CategoryRes> {
    return this.service.update(entry);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<CategoryRes>> {
    return this.service.querySearch(keyword, page, size, sort);
  }

  @Get('tree')
  async searchTree(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<TreeNode[]> {
    return this.service.searchCategoryTree(keyword, value);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.service.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.service.getCategory(id);
  }
}

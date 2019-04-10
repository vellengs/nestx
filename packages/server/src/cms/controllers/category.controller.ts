import { Controller, Get, Query, Post, Put, Delete, Param } from '@nestjs/common';
import { Tags } from 'nest-swagger';
import { CategoryService } from './category.service';
import { KeyValue } from 'common/types/data.types';
import { CreateCategoryDto, CategoryResponse, EditCategoryDto } from '../dto';
import { NullableParseIntPipe, ResultList } from '../../common';
import { Category } from '../interfaces';
import { KeyValueDto } from './../../core/dto';

@Tags('cms')
@Controller('category')
export class CategoryController {

    constructor(private readonly service: CategoryService) { }

    @Get('search')
    async search(
        @Query('keyword') keyword?: string,
        @Query('value') value?: string
    ): Promise<KeyValueDto[]> {
        return this.service.search(keyword, value);
    }

    @Post()
    async create(entry: CreateCategoryDto): Promise<CategoryResponse> {
        return this.service.create(entry);
    }

    @Put()
    async update(entry: EditCategoryDto): Promise<CategoryResponse> {
        return this.service.update(entry);
    }

    @Get('query')
    async query(
        @Query('keyword') keyword?: string,
        @Query('page', new NullableParseIntPipe()) page: number = 1,
        @Query('size', new NullableParseIntPipe()) size: number = 10,
    ): Promise<ResultList<Category>> {
        return this.service.query(page, size, { keyword }, 'name');
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<boolean> {
        return this.service.remove(id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Category> {
        return this.service.findById(id);
    }
}
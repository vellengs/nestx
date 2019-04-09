import { Controller, Get, Query, Post, Put, Delete, Param } from '@nestjs/common';
import { Tags } from 'nest-swagger';
import { MediaService } from './media.service';
import { KeyValue } from 'common/types/data.types';
import { CreateMediaDto, MediaResponse, EditMediaDto } from 'cms/dto/media.dto';
import { NullableParseIntPipe, ResultList } from 'common';
import { Media } from 'cms/interfaces';
import { KeyValueDto } from 'core/dto';

@Tags('cms')
@Controller('media')
export class MediaController {

    constructor(private readonly service: MediaService) { }

    @Get('search')
    async search(
        @Query('keyword') keyword?: string,
        @Query('value') value?: string
    ): Promise<KeyValueDto[]> {
        return this.service.search(keyword, value);
    }

    @Post()
    async create(entry: CreateMediaDto): Promise<MediaResponse> {
        return this.service.create(entry);
    }

    @Put()
    async update(entry: EditMediaDto): Promise<MediaResponse> {
        return this.service.update(entry);
    }

    @Get('query')
    async query(
        @Query('keyword') keyword?: string,
        @Query('page', new NullableParseIntPipe()) page: number = 1,
        @Query('size', new NullableParseIntPipe()) size: number = 10,
    ): Promise<ResultList<Media>> {
        return this.service.query(page, size, { keyword }, 'name');
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<boolean> {
        return this.service.remove(id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Media> {
        return this.service.findById(id);
    }
}
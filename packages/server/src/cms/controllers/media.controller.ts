import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Param,
  UseInterceptors,
  UploadedFiles,
  Logger,
  UploadedFile,
} from '@nestjs/common';
import { Tags } from 'nest-swagger';
import { MediaService } from './media.service';
import {
  CreateMediaDto,
  MediaRes,
  EditMediaDto,
  UploadRes,
  UploadMultipleRes,
  MediaFile,
} from '../dto';
import { NullableParseIntPipe, ResultList } from '../../common';
import { Media } from '../interfaces';
import { KeyValueDto } from '../../core/dto';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
@Tags('cms')
@Controller('media')
export class MediaController {
  constructor(private readonly service: MediaService) {}

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.service.search(keyword, value);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: MediaFile): Promise<UploadRes> {
    return {
      ok: true,
      file: file.path,
    };
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(
    @UploadedFiles() files?: MediaFile[],
  ): Promise<UploadMultipleRes> {
    const fileNames = (files || []).map(item => item.path);
    return {
      ok: true,
      files: fileNames,
    };
  }

  @Post()
  async create(entry: CreateMediaDto): Promise<MediaRes> {
    return this.service.create(entry);
  }

  @Put()
  async update(entry: EditMediaDto): Promise<MediaRes> {
    return this.service.update(entry);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<MediaRes>> {
    return this.service.querySearch(keyword, page, size, sort);
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

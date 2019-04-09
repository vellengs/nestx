import { Controller, Get, Post, Body, UseGuards, Param, Put, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList, NullableParseIntPipe } from './../../common';
import { AppearancesService } from './appearances.service';
import { Appearance } from './../interfaces/appearance.interface';
import { CreateAppearanceReq, EditAppearanceReq, KeyValueDto } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('appearances')
@UseGuards(AuthGuard('jwt'))
export class AppearancesController {
  constructor(private readonly appearanceService: AppearancesService) { }

  @Post()
  async create(@Body() entry: CreateAppearanceReq) {
    return this.appearanceService.create(plainToClass(CreateAppearanceReq, entry));
  }

  @Put()
  async update(@Body() entry: EditAppearanceReq): Promise<Appearance> {
    return this.appearanceService.update(plainToClass(EditAppearanceReq, entry));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.appearanceService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('index', new NullableParseIntPipe()) index: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Appearance>> {
    return this.appearanceService.query(index, size, { keyword });
  }

  @Get('name/:name')
  async getAppearanceByName(@Param('name') name: string): Promise<Appearance> {
    return this.appearanceService.findOne({ name });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Appearance> {
    return this.appearanceService.findById(id);
  }

}

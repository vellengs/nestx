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
import { SettingsService } from './settings.service';
import { Setting } from './../interfaces';
import {
  KeyValueDto,
  CreateSettingReq,
  EditSettingReq,
  SettingsGroup,
  SettingRes,
} from './../dto';
import { Tags } from 'nest-swagger';
import { ResultList, NullableParseIntPipe, RolesGuards } from './../../common';

@Tags('core')
@Controller('setting')
@UseGuards(AuthGuard('jwt'), RolesGuards('setting'))
export class SettingsController {
  constructor(private readonly settingService: SettingsService) {}

  @Post()
  async create(@Body() entry: CreateSettingReq) {
    return this.settingService.create(plainToClass(CreateSettingReq, entry));
  }

  @Put()
  async update(@Body() entry: EditSettingReq): Promise<Setting> {
    return this.settingService.update(plainToClass(EditSettingReq, entry));
  }

  @Put('name/:name')
  async updateSettingsByName(
    @Query('name') name: string,
    @Body() entry: SettingsGroup,
  ): Promise<SettingsGroup> {
    return this.settingService.updateSettingsByName(name, entry);
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.settingService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<Setting>> {
    return this.settingService.querySearch(keyword, page, size, sort);
  }

  @Get('name/:name')
  async getSettingsByName(
    @Query('name') name?: string,
  ): Promise<SettingsGroup> {
    return this.settingService.getSettingsByName(name);
  }

  @Get('key/:key')
  async getSettingsByKey(@Query('key') key: string): Promise<SettingRes> {
    return this.settingService.getSettingsByKey(key);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Setting> {
    return this.settingService.findById(id);
  }
}

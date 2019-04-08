import { Controller, Get, Post, Body, UseGuards, Param, Put, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { GroupsService } from './groups.service';
import { Group } from './../interfaces';
import { KeyValueDto, CreateGroupReq, EditGroupReq, GroupRes } from './../dto';
import { Tags } from 'nest-swagger';
import { ResultList, NullableParseIntPipe } from './../../common';

@Tags('core')
@Controller('groups')
@UseGuards(AuthGuard('jwt'))
export class GroupsController {
  constructor(private readonly settingService: GroupsService) { }

  @Post()
  async create(@Body() entry: CreateGroupReq) {
    return this.settingService.create(plainToClass(CreateGroupReq, entry));
  }

  @Put()
  async update(@Body() entry: EditGroupReq): Promise<Group> {
    return this.settingService.update(plainToClass(EditGroupReq, entry));
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
    @Query('index', new NullableParseIntPipe()) index: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Group>> {
    return this.settingService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Group> {
    return this.settingService.findById(id);
  }

}

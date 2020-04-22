import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { GroupsService } from './groups.service';
import { Group } from './../interfaces';
import {
  KeyValueDto,
  CreateGroupReq,
  EditGroupReq,
  GroupedUsersRes,
} from './../dto';
import { Tags } from 'nest-swagger';
import {
  ResultList,
  NullableParseIntPipe,
  TreeNode,
  RolesGuard,
  LoggingInterceptor,
} from 'nestx-common';

@Tags('core')
@Controller('group')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class GroupsController {
  constructor(private readonly groupService: GroupsService) {}

  @Post()
  async create(@Body() entry: CreateGroupReq) {
    return this.groupService.create(plainToClass(CreateGroupReq, entry));
  }

  @Put()
  async update(@Body() entry: EditGroupReq): Promise<Group> {
    return this.groupService.editGroup(plainToClass(EditGroupReq, entry));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.groupService.search(keyword, value);
  }

  @Get('users')
  async getGroupedUsers(
    @Query('parent') parent?: string,
  ): Promise<GroupedUsersRes> {

    

    return this.groupService.getGroupedUsers(parent);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<Group>> {
    return this.groupService.querySearch(keyword, page, size, sort);
  }

  @Get('tree')
  async searchTree(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<TreeNode[]> {
    return this.groupService.searchGroupTree(keyword, value);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Group> {
    return this.groupService.findById(id);
  }
}

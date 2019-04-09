import { Controller, Get, Post, Body, UseGuards, Param, Put, Query, Req, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './../interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList, NullableParseIntPipe } from './../../common';
import { KeyValueDto, CreateUserReq, EditUserReq, UsersOfRole } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('profile')
  async profile(@Req() request: any): Promise<User> {
    const user = request.user;
    return this.usersService.findById(user._id);
  }

  @Post()
  async create(@Body() user: CreateUserReq) {
    return this.usersService.create(plainToClass(CreateUserReq, user));
  }

  @Post('role')
  async addUsersToRole(
    @Body() users: UsersOfRole): Promise<boolean> {
    return this.usersService.addAccountsToRole(users.role, users.userIds);
  }

  @Put()
  async update(@Body() user: EditUserReq): Promise<User> {
    return this.usersService.update(plainToClass(EditUserReq, user));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.usersService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('index', new NullableParseIntPipe()) index: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<User>> {
    return this.usersService.query(index, size, { keyword }, 'name');
  }

  @Delete('role')
  async removeAccountFromRole(@Query('role') role: string, @Query('id') accountId: string): Promise<boolean> {
    return this.usersService.removeUserFromRole(role, accountId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }
}

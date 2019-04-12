import { Controller, Get, Post, Body, UseGuards, Param, Put, Query, Req, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './../interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList, NullableParseIntPipe, Result } from './../../common';
import { KeyValueDto, CreateUserReq, EditUserReq, EditProfileReq, UsersOfRole, UserRes } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('profile')
  async profile(@Req() request: any): Promise<User> {
    const user = request.user;
    const instance = this.usersService.getProfile(user);
    return instance;
  }

  @Post()
  async create(@Body() user: CreateUserReq): Promise<UserRes> {
    return this.usersService.create(plainToClass(CreateUserReq, user));
  }

  @Post('role')
  async addUsersToRole(
    @Body() users: UsersOfRole): Promise<Result> {
    return this.usersService.addAccountsToRole(users.role, users.userIds);
  }

  @Put()
  async update(@Body() user: EditUserReq): Promise<UserRes> {
    return this.usersService.update(plainToClass(EditUserReq, user));
  }

  @Put('profile')
  async updateProfile(@Body() user: EditProfileReq, @Req() req: Express.Request): Promise<UserRes> {
    return this.usersService.updateProfile(req.user.id, user);
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
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<User>> {
    return this.usersService.query(page, size, { keyword }, 'name');
  }

  @Delete('role')
  async removeAccountFromRole(@Query('role') role: string, @Query('id') accountId: string): Promise<Result> {
    return this.usersService.removeUserFromRole(role, accountId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }
}

import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { ChangePasswordDto } from './dto/change-password.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { ChangeRolesDto } from './dto/change-roles.dto';

@ApiBearerAuth()
@ApiUseTags('nestx')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiOperation({ title: '创建帐号' })
  @ApiResponse({ status: 403, description: 'Forbidden to create account' })
  async create(@Body() dto: CreateUserDto) {
    this.usersService.create(dto);
  }


  @Put()
  @ApiOperation({ title: '编辑帐号' })
  @ApiResponse({ status: 403, description: 'Forbidden to edit account' })
  async edit(@Body() dto: EditUserDto) {
    this.usersService.edit(dto);
  }


  @Put('changePassword')
  @ApiOperation({ title: '修改密码' })
  @ApiResponse({ status: 403, description: 'Forbidden to edit password' })
  async changePassword(@Body() dto: ChangePasswordDto) {
    this.usersService.changePassword(dto);
  }

  @Put('roles')
  @ApiOperation({ title: '修改用户角色' })
  @ApiResponse({ status: 403, description: 'Forbidden to change use\'s roles' })
  async changeRoles(@Body() dto: ChangeRolesDto) {
    this.usersService.changeRoles(dto);
  }

  @Get('search')
  async search(@Param('keyword') keyword?: string): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('query')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User[]> {
    return this.usersService.findAll();
  }

}

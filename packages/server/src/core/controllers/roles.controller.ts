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
import { ResultList, NullableParseIntPipe, RolesGuard } from './../../common';
import { RolesService } from './roles.service';
import { Role } from './../interfaces/role.interface';
import { CreateRoleReq, EditRoleReq, KeyValueDto } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('role')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  async create(@Body() entry: CreateRoleReq) {
    return this.roleService.create(plainToClass(CreateRoleReq, entry));
  }

  @Put()
  async update(@Body() entry: EditRoleReq): Promise<Role> {
    return this.roleService.update(plainToClass(EditRoleReq, entry));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.roleService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<Role>> {
    return this.roleService.querySearch(keyword, page, size, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Role> {
    return this.roleService.findById(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList, NullableParseIntPipe } from './../../common';
import { MenusService } from './menus.service';
import { Menu } from './../interfaces';
import { CreateMenuReq, EditMenuReq, KeyValueDto, MenuRes } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('menu')
@UseGuards(AuthGuard('jwt'))
export class MenusController {
  constructor(private readonly menuService: MenusService) {}

  @Post()
  async create(@Body() entry: CreateMenuReq) {
    return this.menuService.create(plainToClass(CreateMenuReq, entry));
  }

  @Put()
  async update(@Body() entry: EditMenuReq): Promise<Menu> {
    return this.menuService.update(plainToClass(EditMenuReq, entry));
  }

  @Get('search')
  async search(
    @Query('keyword') keyword?: string,
    @Query('value') value?: string,
  ): Promise<KeyValueDto[]> {
    return this.menuService.search(keyword, value);
  }

  @Get('query')
  async query(
    @Query('isMenu') isMenu: boolean,
    @Query('keyword') keyword?: string,
    @Query('page', new NullableParseIntPipe()) page: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
    @Query('sort') sort?: string,
  ): Promise<ResultList<Menu>> {
    return this.menuService.querySearch(isMenu, keyword, page, size, sort);
  }

  @Get('permissions')
  async getPermissionTags(): Promise<
    {
      id: string;
      name: string;
      desc: string;
    }[]
  > {
    return this.menuService.getAllPermissionTags();
  }

  @Get('auth')
  async getUserMenus(@Req() request: Express.Request): Promise<MenuRes[]> {
    return this.menuService.getAuthenticatedMenus(request.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MenuRes> {
    return this.menuService.getMenuById(id);
  }
}

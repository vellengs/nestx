import { Controller, Get, Post, Body, UseGuards, Param, Put, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { ResultList, NullableParseIntPipe } from './../../common';
import { MenusService } from './menus.service';
import { Menu } from './../interfaces/Menu.interface';
import { CreateMenuReq, EditMenuReq, KeyValueDto } from './../dto';
import { Tags } from 'nest-swagger';

@Tags('core')
@Controller('menus')
@UseGuards(AuthGuard('jwt'))
export class MenusController {
  constructor(private readonly menuService: MenusService) { }

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
    @Query('keyword') keyword?: string,
    @Query('index', new NullableParseIntPipe()) index: number = 1,
    @Query('size', new NullableParseIntPipe()) size: number = 10,
  ): Promise<ResultList<Menu>> {
    return this.menuService.query(index, size, { keyword });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findById(id);
  }

}

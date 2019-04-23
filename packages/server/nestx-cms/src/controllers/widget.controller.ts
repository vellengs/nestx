import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Param,
  Body
} from "@nestjs/common";
import { Tags } from "nest-swagger";
import { WidgetService } from "./widget.service";
import { CreateWidgetDto, WidgetRes, EditWidgetDto } from "../dto";
import { NullableParseIntPipe, ResultList, KeyValue } from "nestx-common";
import { Widget } from "../interfaces";

@Tags("cms")
@Controller("widget")
export class WidgetController {
  constructor(private readonly service: WidgetService) {}

  @Get("search")
  async search(
    @Query("keyword") keyword?: string,
    @Query("value") value?: string
  ): Promise<KeyValue[]> {
    return this.service.search(keyword, value);
  }

  @Post()
  async create(@Body() entry: CreateWidgetDto): Promise<WidgetRes> {
    return this.service.create(entry);
  }

  @Put()
  async update(@Body() entry: EditWidgetDto): Promise<WidgetRes> {
    return this.service.update(entry);
  }

  @Get("query")
  async query(
    @Query("keyword") keyword?: string,
    @Query("page", new NullableParseIntPipe()) page: number = 1,
    @Query("size", new NullableParseIntPipe()) size: number = 10,
    @Query("sort") sort?: string
  ): Promise<ResultList<WidgetRes>> {
    return this.service.querySearch(keyword, page, size, sort);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<boolean> {
    return this.service.remove(id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Widget> {
    return this.service.findById(id);
  }
}

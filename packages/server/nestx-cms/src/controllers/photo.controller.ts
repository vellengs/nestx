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
import { PhotoService } from "./photo.service";
import { CreatePhotoDto, PhotoRes, EditPhotoDto } from "./../dto";
import { NullableParseIntPipe, ResultList, KeyValue } from "nestx-common";
import { Photo } from "../interfaces";

@Tags("cms")
@Controller("photo")
export class PhotoController {
  constructor(private readonly service: PhotoService) {}

  @Get("search")
  async search(
    @Query("keyword") keyword?: string,
    @Query("value") value?: string
  ): Promise<KeyValue[]> {
    return this.service.search(keyword, value);
  }

  @Post()
  async create(@Body() entry: CreatePhotoDto): Promise<PhotoRes> {
    return this.service.create(entry);
  }

  @Put()
  async update(@Body() entry: EditPhotoDto): Promise<PhotoRes> {
    return this.service.update(entry);
  }

  @Get("query")
  async query(
    @Query("keyword") keyword?: string,
    @Query("page", new NullableParseIntPipe()) page: number = 1,
    @Query("size", new NullableParseIntPipe()) size: number = 10,
    @Query("sort") sort?: string
  ): Promise<ResultList<PhotoRes>> {
    return this.service.querySearch(keyword, page, size, sort);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<boolean> {
    return this.service.remove(id);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Photo> {
    return this.service.findById(id);
  }
}

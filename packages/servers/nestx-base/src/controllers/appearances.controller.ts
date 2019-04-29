import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  Put,
  Query
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { plainToClass } from "class-transformer";
import { AppearancesService } from "./appearances.service";
import { CreateAppearanceReq, EditAppearanceReq, KeyValueDto } from "./../dto";
import { Tags } from "nest-swagger";
import { NullableParseIntPipe, ResultList } from "nestx-common";
import { Appearance } from "./../schemas";

@Tags("core")
@Controller("appearance")
@UseGuards(AuthGuard("jwt"))
export class AppearancesController {
  constructor(private readonly appearanceService: AppearancesService) {}

  @Post()
  async create(@Body() entry: CreateAppearanceReq) {
    return this.appearanceService.create(
      plainToClass(CreateAppearanceReq, entry)
    );
  }

  @Put()
  async update(@Body() entry: EditAppearanceReq): Promise<Appearance> {
    return this.appearanceService.update(
      plainToClass(EditAppearanceReq, entry)
    );
  }

  @Get("search")
  async search(
    @Query("keyword") keyword?: string,
    @Query("value") value?: string
  ): Promise<KeyValueDto[]> {
    return this.appearanceService.search(keyword, value);
  }

  @Get("query")
  async query(
    @Query("keyword") keyword?: string,
    @Query("page", new NullableParseIntPipe()) page: number = 1,
    @Query("size", new NullableParseIntPipe()) size: number = 10,
    @Query("sort") sort?: string
  ): Promise<ResultList<Appearance>> {
    return this.appearanceService.querySearch(keyword, page, size, sort);
  }

  @Get("name/:name")
  async getAppearanceByName(@Param("name") name: string): Promise<Appearance> {
    const result = await this.appearanceService.findOne({ name });
    // result.options = JSON.parse(result.options || "{}");
    // result.data = JSON.parse(result.data || "{}");
    return result;
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Appearance> {
    return this.appearanceService.findById(id);
  }
}

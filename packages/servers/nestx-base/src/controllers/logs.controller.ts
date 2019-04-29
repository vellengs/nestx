import {
  Controller,
  Get,
  UseGuards,
  Param,
  Query,
  UseInterceptors
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ResultList,
  NullableParseIntPipe,
  RolesGuard,
  LoggingInterceptor
} from "nestx-common";
import { LogsService } from "./logs.service";
import { Tags } from "nest-swagger";
import { Log } from "./../schemas";

@Tags("core")
@Controller("log")
@UseGuards(AuthGuard("jwt"), RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class LogsController {
  constructor(private readonly logService: LogsService) {}

  @Get("query")
  async query(
    @Query("keyword") keyword?: string,
    @Query("page", new NullableParseIntPipe()) page: number = 1,
    @Query("size", new NullableParseIntPipe()) size: number = 10,
    @Query("sort") sort?: string
  ): Promise<ResultList<Log>> {
    return this.logService.querySearch(keyword, page, size, sort);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Log> {
    return this.logService.findById(id);
  }
}

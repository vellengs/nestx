import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ResultList } from "nestx-common";
import { BaseService } from "./base.service";
import { Log } from "./../schemas";
import { ModelType } from "typegoose";

@Injectable()
export class LogsService extends BaseService<Log> {
  constructor(@InjectModel(Log) protected readonly model: ModelType<Log>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Log>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: "name" },
      this.defaultQueryFields,
      sort
    );
  }
}

import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MongooseService, ResultList } from "nestx-common";
import { LogModel } from "./../interfaces";

@Injectable()
export class LogsService extends MongooseService<LogModel> {
  constructor(@InjectModel("Log") protected readonly model: Model<LogModel>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<LogModel>> {
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

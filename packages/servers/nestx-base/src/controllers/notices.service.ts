import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MongooseService, ResultList } from "nestx-common";
import { NoticeModel } from "./../interfaces";

@Injectable()
export class NoticesService extends MongooseService<NoticeModel> {
  defaultQueryFields = ["title", "avatar", "type", "read"];
  constructor(
    @InjectModel("Notice") protected readonly model: Model<NoticeModel>
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<NoticeModel>> {
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

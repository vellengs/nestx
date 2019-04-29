import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ResultList } from "nestx-common";
import { BaseService } from "./base.service";
import { Notice } from "./../schemas";
import { ModelType } from "typegoose";

@Injectable()
export class NoticesService extends BaseService<Notice> {
  defaultQueryFields = ["title", "avatar", "type", "read"];
  constructor(
    @InjectModel(Notice) protected readonly model: ModelType<Notice>
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Notice>> {
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

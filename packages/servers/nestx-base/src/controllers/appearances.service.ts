import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ResultList } from "nestx-common";
import { ModelType } from "typegoose";
import { Appearance } from "./../schemas";
import { BaseService } from "./base.service";

@Injectable()
export class AppearancesService extends BaseService<Appearance> {
  defaultQueryFields = ["name", "options", "data"];
  constructor(
    @InjectModel(Appearance) protected readonly model: ModelType<Appearance>
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Appearance>> {
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

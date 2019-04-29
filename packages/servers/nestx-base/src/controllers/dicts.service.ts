import { Injectable } from "@nestjs/common";
import { ResultList } from "nestx-common";
import { ModelType } from "typegoose";
import { Dict } from "./../schemas";
import { BaseService } from "./base.service";
import { InjectModel } from "nestjs-typegoose";

@Injectable()
export class DictsService extends BaseService<Dict> {
  defaultQueryFields = ["name", "category", "translate", "expand"];
  constructor(@InjectModel(Dict) protected readonly model: ModelType<Dict>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    category: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Dict>> {
    return super.query(
      page,
      size,
      {
        category
      },
      { keyword, field: "name" },
      this.defaultQueryFields,
      sort
    );
  }
}

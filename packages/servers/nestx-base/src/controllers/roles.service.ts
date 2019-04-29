import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ResultList } from "nestx-common";
import { BaseService } from "./base.service";
import { Role } from "./../schemas";
import { ModelType } from "typegoose";

@Injectable()
export class RolesService extends BaseService<Role> {
  defaultQueryFields = ["name", "description", "permissions"];
  constructor(@InjectModel(Role) protected readonly model: ModelType<Role>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Role>> {
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

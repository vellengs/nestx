import { Injectable } from "@nestjs/common";
import { MongooseService, ResultList, TreeNode } from "nestx-common";
import { CategoryModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CategoryService extends MongooseService<CategoryModel> {
  defaultQueryFields = ["name", "slug", "order", "parent", "description"];
  constructor(
    @InjectModel("Category") protected readonly model: Model<CategoryModel>
  ) {
    super(model);
  }

  async searchCategoryTree(
    keyword?: string,
    value?: string,
    limit: number = 10
  ): Promise<TreeNode[]> {
    return super.searchTree(this.model, keyword, value, "", limit);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<CategoryModel>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: "name" },
      this.defaultQueryFields,
      sort
    );
  }

  async getCategory(id: string): Promise<CategoryModel> {
    const instance = await this.model
      .findById(id)
      .select(this.defaultQueryFields)
      .exec();

    return instance;
  }
}

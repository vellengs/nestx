import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService, TreeNode, ResultList } from './../../common';
import { GroupModel } from './../interfaces';

@Injectable()
export class GroupsService extends MongooseService<GroupModel> {
  defaultQueryFields = ['name', 'key', 'value', 'description'];
  constructor(
    @InjectModel('Group') protected readonly model: Model<GroupModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<GroupModel>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: 'name' },
      this.defaultQueryFields,
      sort,
    );
  }

  async searchGroupTree(
    keyword?: string,
    value?: string,
    limit: number = 10,
  ): Promise<TreeNode[]> {
    return super.searchTree(this.model, keyword, value, '', limit);
  }
}

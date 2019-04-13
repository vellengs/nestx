import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService, TreeNode } from './../../common';
import { GroupModel } from './../interfaces';

@Injectable()
export class GroupsService extends MongooseService<GroupModel> {
  defaultQueryFields = ['name', 'key', 'value', 'description'];
  constructor(
    @InjectModel('Group') protected readonly model: Model<GroupModel>,
  ) {
    super(model);
  }

  async searchGroupTree(
    keyword?: string,
    value?: string,
    limit: number = 10,
  ): Promise<TreeNode[]> {
    return super.searchTree(this.model, keyword, value, '', limit);
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  MongooseService,
  TreeNode,
  ResultList,
  Criteria,
} from './../../common';
import { GroupModel, UserModel } from './../interfaces';
import { GroupedUsersRes } from './../dto';

@Injectable()
export class GroupsService extends MongooseService<GroupModel> {
  defaultQueryFields = [
    'name',
    'outid',
    'isRegion',
    'director',
    'icon',
    'order',
    'parent',
    'description',
  ];
  constructor(
    @InjectModel('Group') protected readonly model: Model<GroupModel>,
    @InjectModel('User') protected readonly userModel: Model<UserModel>,
  ) {
    super(model);
  }

  async getGroupedUsers(
    parent?: string,
    size = 1000,
  ): Promise<GroupedUsersRes> {
    const condition: Criteria = {};
    if (parent) {
      condition.parent = parent;
    }
    const groups =
      (await this.model
        .find(condition)
        .select(['name', 'icon', 'isRegion', 'parent'])
        .sort({ order: -1 })
        .limit(size)
        .exec()) || [];
    const groupIds = await groups.map(item => item.id);
    const usersItems =
      (await this.userModel
        .find({
          groups: {
            $in: groupIds,
          },
          isDisable: false,
        })
        .select(['name', 'username', 'groups'])
        .exec()) || [];

    const users = usersItems.map(user => {
      const { id, name, groups } = user;
      return {
        id,
        name,
        groups,
      };
    });

    return {
      groups,
      users,
    } as GroupedUsersRes;
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

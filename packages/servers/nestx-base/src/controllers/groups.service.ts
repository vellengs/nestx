import { Model } from "mongoose";
import { Injectable, HttpStatus } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { CustomException, TreeNode, ResultList, Criteria } from "nestx-common";
import { GroupedUsersRes, EditGroupReq } from "./../dto";
import { BaseService } from "./base.service";
import { Group, User } from "./../schemas";
import { ModelType } from "typegoose";

@Injectable()
export class GroupsService extends BaseService<Group> {
  defaultQueryFields = [
    "name",
    "outid",
    "isRegion",
    "director",
    "icon",
    "order",
    "parent",
    "description"
  ];
  constructor(
    @InjectModel(Group) protected readonly model: ModelType<Group>,
    @InjectModel(User) protected readonly userModel: ModelType<User>
  ) {
    super(model);
  }

  async editGroup(entry: EditGroupReq) {
    if (entry.id === entry.parent) {
      throw new CustomException(
        "Can not set parent by itself.",
        HttpStatus.BAD_REQUEST
      );
    }
    return super.update(entry);
  }

  // TODO;
  async getGroupedUsers(
    parent?: string,
    size = 1000
  ): Promise<GroupedUsersRes> {
    const condition: Criteria = {};
    if (parent) {
      condition.parent = parent;
    }
    const groupsItems =
      (await this.model
        .find(condition)
        .select(["name", "icon", "isRegion", "parent"])
        .sort({ order: -1 })
        .limit(size)
        .exec()) || [];
    const groupIds = await groupsItems.map(item => item.id);
    const usersItems =
      (await this.userModel
        .find({
          groups: {
            $in: groupIds
          },
          isDisable: false
        })
        .select(["name", "username", "groups"])
        .exec()) || [];

    const groupedUsers = usersItems.map(user => {
      const { id, name, groups } = user;
      return {
        id,
        name,
        groups
      };
    });

    const groups = groupsItems.map(item => {});
    const users = groupedUsers.map(item => {});

    const result = {
      groups,
      users
    };

    return null; // result as GroupedUsersRes; // TODO
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Group>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: "name" },
      this.defaultQueryFields,
      sort
    );
  }

  async searchGroupTree(
    keyword?: string,
    value?: string,
    limit: number = 10
  ): Promise<TreeNode[]> {
    return super.searchTree(this.model, keyword, value, "", limit);
  }
}

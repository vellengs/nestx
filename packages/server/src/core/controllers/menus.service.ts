import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService, Criteria } from './../mongoose.service';
import { MenuModel, User, GroupModel } from './../interfaces';
import { ResultList } from './../../common';

@Injectable()
export class MenusService extends MongooseService<MenuModel> {
  defaultQueryFields = [
    'name',
    'slug',
    'group',
    'link',
    'externalLink',
    'icon',
    'badge',
    'enable',
    'parent',
    'isMenu'
  ];

  constructor(
    @InjectModel('Menu') protected readonly model: Model<MenuModel>,
    @InjectModel('Group') protected readonly groupModel: Model<GroupModel>
  ) {
    super(model);
  }

  async getAllPermissionTags() {
    const result = await this.model.find({ isMenu: false }).select({
      name: 1,
      slug: 1,
      link: 1
    }).exec() || [];
    return result.map((r) => {
      return { id: r._id, name: r.name, desc: r.link };
    });
  }

  async query(
    index: number = 1,
    size: number = 10,
    query: Criteria = {}, searchField = 'name', fields: string[] = this.defaultQueryFields, sort: Criteria | string = { _id: 1 }
  ): Promise<ResultList<MenuModel>> {
    //   query.populate([{
    //     path: 'permissions',
    //     select: 'name',
    //   }]);
    return super.query(index, size, query, searchField, fields, sort);
  }

  async getAuthenticatedMenus(currentUser: User): Promise<MenuModel[]> {
    if (!currentUser) {
      Promise.reject("user is not authenticated");
    }
    console.log('currentUser: *****', currentUser);
    if (!currentUser.isAdmin) {
      const user = await this.model.findById(currentUser.id, 'groups').exec(); // TODO
      const roles = (user.toObject() as User).roles || [];
      const roleDocs = await this.groupModel.find({
        _id: { $in: roles }
      }, 'permissions').exec() || [];
      const permissions: string[] = [];
      roleDocs.forEach((g: any) => {
        permissions.push(...g.permissions);
      });
      const menus = await this.model.find({
        _id: {
          $in: permissions
        },
        isMenu: true
      });
      return menus as any;
    } else {
      const menus = await this.model.find({
        isMenu: true
      });
      return menus as any;
    }
  }

}

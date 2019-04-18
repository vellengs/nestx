import { ModuleRef } from '@nestjs/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuModel, RoleModel } from './../../core/interfaces';

const mapActions = {
  GET: 'read',
  POST: 'create',
  PUT: 'update',
  DELETE: 'delete',
};

@Injectable()
export class AccessManagement {
  constructor(
    @InjectModel('Menu') private readonly menuModel: Model<MenuModel>,
    @InjectModel('Role') private readonly roleModel: Model<RoleModel>,
  ) {}

  async canAccess(
    roles: string[],
    ctrl: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  ) {
    const action = mapActions[method];
    const permissions =
      (await this.menuModel
        .find({
          isMenu: false,
          slug: `${ctrl}/${action}`,
        })
        .select({ _id: 1 })) || [];

    const count = await this.roleModel.countDocuments({
      _id: { $in: roles },
      permissions: {
        $in: permissions,
      },
    });
    return count > 0;
  }
}

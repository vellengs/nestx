import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService, ResultList } from './../../common';
import { RoleModel } from './../interfaces';

@Injectable()
export class RolesService extends MongooseService<RoleModel> {
  defaultQueryFields = ['name', 'description', 'permissions'];
  constructor(@InjectModel('Role') protected readonly model: Model<RoleModel>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<RoleModel>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: 'name' },
      this.defaultQueryFields,
      sort,
    );
  }
}

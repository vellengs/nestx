import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../../common/services/mongoose.service';
import { RoleModel } from './../interfaces';

@Injectable()
export class RolesService extends MongooseService<RoleModel> {

  defaultQueryFields = ['name', 'description', 'permissions'];
  constructor(
    @InjectModel('Role') protected readonly model: Model<RoleModel>
  ) {
    super(model);
  }

}
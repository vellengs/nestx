import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { GroupModel } from './../interfaces';

@Injectable()
export class GroupsService extends MongooseService<GroupModel> {

  defaultQueryFields = ['name', 'key', 'value', 'description'];
  constructor(@InjectModel('Group') protected readonly model: Model<GroupModel>) {
    super(model);
  }

}

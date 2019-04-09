import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DictModel } from './../interfaces';
import { MongooseService } from './../../common/services/mongoose.service';

@Injectable()
export class DictsService extends MongooseService<DictModel> {

  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(
    @InjectModel('Dict') protected readonly model: Model<DictModel>
  ) {
    super(model);
  }

}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { DictModel } from './../interfaces';

@Injectable()
export class DictsService extends MongooseService<DictModel> {

  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(
    @InjectModel('Dict') protected readonly model: Model<DictModel>
  ) {
    super(model);
  }

}

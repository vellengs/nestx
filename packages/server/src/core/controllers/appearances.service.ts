import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppearanceModel } from './../interfaces';
import { MongooseService } from './../../common/services/mongoose.service';

@Injectable()
export class AppearancesService extends MongooseService<AppearanceModel> {

  defaultQueryFields = ['name', 'options', 'data'];
  constructor(
    @InjectModel('Appearance') protected readonly model: Model<AppearanceModel>
  ) {
    super(model);
  }

}

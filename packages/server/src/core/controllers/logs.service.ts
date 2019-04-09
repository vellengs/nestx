import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../../common/services/mongoose.service';
import { LogModel } from './../interfaces';

@Injectable()
export class LogsService extends MongooseService<LogModel> {

  constructor(@InjectModel('Log') protected readonly model: Model<LogModel>) {
    super(model);
  }

}

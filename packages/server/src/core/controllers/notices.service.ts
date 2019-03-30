import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { NoticeModel } from './../interfaces';

@Injectable()
export class NoticesService extends MongooseService<NoticeModel> {

  defaultQueryFields = ['title', 'avatar', 'type', 'read'];
  constructor(@InjectModel('Notice') protected readonly model: Model<NoticeModel>) {
    super(model);
  }

}

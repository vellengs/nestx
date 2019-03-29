import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { MenuModel } from './../interfaces';

@Injectable()
export class MenusService extends MongooseService<MenuModel> {

  constructor(@InjectModel('Menu') protected readonly model: Model<MenuModel>) {
    super(model);
  }

}

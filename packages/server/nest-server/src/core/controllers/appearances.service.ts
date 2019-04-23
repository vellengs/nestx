import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppearanceModel } from './../interfaces';
import { MongooseService, ResultList } from './../../common';

@Injectable()
export class AppearancesService extends MongooseService<AppearanceModel> {
  defaultQueryFields = ['name', 'options', 'data'];
  constructor(
    @InjectModel('Appearance') protected readonly model: Model<AppearanceModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<AppearanceModel>> {
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

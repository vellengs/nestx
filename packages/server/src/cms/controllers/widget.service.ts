import { Injectable } from '@nestjs/common';
import { MongooseService, ResultList } from './../../common';
import { WidgetModel } from './../interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WidgetService extends MongooseService<WidgetModel> {
  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(
    @InjectModel('Widget') protected readonly model: Model<WidgetModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<WidgetModel>> {
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

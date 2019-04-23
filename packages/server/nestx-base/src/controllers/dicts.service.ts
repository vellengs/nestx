import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DictModel } from './../interfaces';
import { MongooseService, ResultList } from 'nestx-common';

@Injectable()
export class DictsService extends MongooseService<DictModel> {
  defaultQueryFields = ['name', 'category', 'translate', 'expand'];
  constructor(@InjectModel('Dict') protected readonly model: Model<DictModel>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    category: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<DictModel>> {
    return super.query(
      page,
      size,
      {
        category,
      },
      { keyword, field: 'name' },
      this.defaultQueryFields,
      sort,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { MongooseService, ResultList } from './../../common';
import { CategoryModel } from './../interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService extends MongooseService<CategoryModel> {
  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(
    @InjectModel('Category') protected readonly model: Model<CategoryModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<CategoryModel>> {
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

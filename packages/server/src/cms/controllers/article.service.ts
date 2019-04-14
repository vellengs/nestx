import { Injectable } from '@nestjs/common';
import { MongooseService, ResultList } from './../../common';
import { ArticleModel } from './../interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleService extends MongooseService<ArticleModel> {
  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(
    @InjectModel('Article') protected readonly model: Model<ArticleModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<ArticleModel>> {
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

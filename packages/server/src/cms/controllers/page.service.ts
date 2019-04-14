import { Injectable } from '@nestjs/common';
import { MongooseService, ResultList } from './../../common';
import { PageModel } from './../interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PageService extends MongooseService<PageModel> {
  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(@InjectModel('Page') protected readonly model: Model<PageModel>) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<PageModel>> {
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

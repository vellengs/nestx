import { Injectable } from '@nestjs/common';
import { MongooseService, ResultList } from './../../common';
import { MediaModel } from './../interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MediaService extends MongooseService<MediaModel> {
  defaultQueryFields = ['name', 'translate', 'expand'];
  constructor(
    @InjectModel('Media') protected readonly model: Model<MediaModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<MediaModel>> {
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

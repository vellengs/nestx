import { Injectable } from '@nestjs/common';
import { MongooseService, ResultList } from 'nestx-common';
import { PhotoModel } from './../interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PhotoService extends MongooseService<PhotoModel> {
  defaultQueryFields = ['name', 'caption', 'description', 'ext', 'url', 'uri'];
  constructor(
    @InjectModel('Photo') protected readonly model: Model<PhotoModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<PhotoModel>> {
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

import { Model, Document, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { ResultList } from './../interfaces/result.interface';
import { ClassType } from 'class-transformer/ClassTransformer';

export interface IdentifyEntry {
  id: string | number | ObjectID;
  [key: string]: any;
}

export interface Criteria {
  [key: string]: any;
}

@Injectable()
export class MongooseService<T extends Document>  {

  defaultQueryFields: string[] = [];

  constructor(
    protected model: Model<T>
  ) { }

  async create(entry: any): Promise<T> {
    const instance = new this.model(entry);
    return await instance.save();
  }

  async update(entry: IdentifyEntry, fields: string[] = this.defaultQueryFields): Promise<T> {
    const instance = await this.model.findOneAndUpdate(
      { _id: entry.id },
      { $set: entry },
      { upsert: true, fields: this.getFields(fields), 'new': true }).exec();
    return instance;
  }

  async query(page: number = 1, size: number = 10,
    query: Criteria = {}, searchField = 'name', fields: string[] = this.defaultQueryFields, sort: Criteria | string = { _id: 1 }
  ): Promise<ResultList<T>> {
    page = page < 1 ? 1 : page;

    const criteria: Criteria = {};
    criteria[searchField] = new RegExp(query.keyword, 'i');
    const condition = query.keyword ? criteria : {};

    const selectFields: Criteria = this.getFields(fields);
    const listQuery = this.model.find(condition).select(selectFields).sort(sort);
    const collection = this.model.find(condition);

    return new Promise<ResultList<T>>(async (resolve) => {
      let result: ResultList<T> = {
        list: await listQuery.limit(size).skip(size * (page - 1)).lean(),
        count: await collection.countDocuments(),
        query: {
          page: page,
          size: size
        }
      }
      resolve(result);
    })
  }

  async search(
    keyword?: string, id?: string,
    category = '', limit: number = 10, labelField = 'name', valueField = '_id', searchField = 'name'
  ): Promise<any[]> {

    const criteria: Criteria = {};
    criteria[searchField] = new RegExp(keyword, 'i');
    const query = keyword ? criteria : {};

    if (category) {
      query.category = category;
    }

    const fields: Criteria = {};
    fields[labelField] = 1;
    fields[valueField] = 1;

    const docs = await this.model.find(query).select(fields)
      .limit(limit)
      .exec() || [];

    if (id && (Types.ObjectId.isValid(id) || valueField !== '_id')) {
      const conditions: Criteria = {};
      conditions[valueField] = id;
      const selected = await this.model.findOne(conditions).select(fields);
      if (selected) {
        const found = docs.findIndex((doc: Criteria) => doc[valueField] == id);
        if (found === -1) {
          docs.push(selected);
        }
      }
    }

    return docs.map((item: Criteria) => {
      const result = {
        label: item[labelField],
        value: item[valueField]
      };
      return result;
    });
  }

  async findOne(conditions?: any): Promise<T> {
    return await this.model.findOne(conditions).exec();
  }

  async findById(id: string | number | ObjectID): Promise<T> {
    return await this.model.findById(id).exec();
  }

  async remove(id: string | number | ObjectID): Promise<any> {
    let entity = await this.model.findById(id);
    return await this.model.deleteOne(entity);
  }

  protected getFields(fields: string[]) {
    const selectFields: Criteria = {};
    // selectFields._id = 0;
    fields.forEach(field => {
      selectFields[field] = 1;
    });
    return selectFields;
  }

}

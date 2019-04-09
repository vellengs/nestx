import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseService } from './../mongoose.service';
import { SettingModel } from './../interfaces';
import { SettingsGroup, SettingRes } from './../dto';

@Injectable()
export class SettingsService extends MongooseService<SettingModel> {

  defaultQueryFields = ['name', 'key', 'value', 'description'];
  constructor(@InjectModel('Setting') protected readonly model: Model<SettingModel>) {
    super(model);
  }

  async getSettingsByName(name?: string): Promise<SettingsGroup> {
    const result = new SettingsGroup();

    if (name) {
      const docs = await this.model.find({
        name: name
      }).exec();
      if (docs) {
        docs.forEach((doc) => {
          result[doc.key] = doc.value;
        });
      }
    }

    return result;
  }

  async getSettingsByKey(name: string): Promise<SettingRes> {
    const setting = await this.model.findOne({
      key: name
    }).exec();
    return setting;  // TODO;
  }

  async updateSettingsByName(name: string, entry: SettingsGroup): Promise<SettingsGroup> {

    const keys = Object.keys(entry);
    for (let key of keys) {
      const instance = {
        key: key,
        value: entry[key]
      };
      await this.model.findOneAndUpdate(
        { key: key, name: name },
        { $set: instance },
        { upsert: true, 'new': true }).exec();
    }
    return this.getSettingsByName(name);
  }

}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ResultList } from "nestx-common";
import { SettingsGroup } from "./../dto";
import { BaseService } from "./base.service";
import { Setting } from "./../schemas";
import { ModelType } from "typegoose";

@Injectable()
export class SettingsService extends BaseService<Setting> {
  defaultQueryFields = ["name", "key", "value", "description"];
  constructor(
    @InjectModel(Setting) protected readonly model: ModelType<Setting>
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<Setting>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: "name" },
      this.defaultQueryFields,
      sort
    );
  }

  async getSettingsByName(name?: string): Promise<SettingsGroup> {
    const result = new SettingsGroup();
    result.options = {};

    if (name) {
      const docs = await this.model
        .find({
          name: name
        })
        .exec();
      if (docs) {
        docs.forEach(doc => {
          // result.options[doc.key] = doc.value;  //TODO
        });
      }
    }
    return result;
  }

  async getSettingsByKey(name: string): Promise<Setting> {
    const setting = await this.model
      .findOne({
        key: name
      })
      .exec();
    return setting; // TODO;
  }

  async updateSettingsByName(
    name: string,
    entry: SettingsGroup
  ): Promise<SettingsGroup> {
    entry.options = entry.options || {};
    const keys = Object.keys(entry.options);
    for (let key of keys) {
      const instance = {
        key: key,
        value: entry.options[key]
      };
      await this.model
        .findOneAndUpdate(
          { key: key, name: name },
          { $set: instance },
          { upsert: true, new: true }
        )
        .exec();
    }
    return this.getSettingsByName(name);
  }
}

import { Injectable, HttpStatus } from "@nestjs/common";
import { MongooseService, ResultList, CustomException } from "nestx-common";
import { PageModel, ContentModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreatePageReq, EditPageReq, PageRes } from "../dto";

@Injectable()
export class PageService extends MongooseService<PageModel> {
  defaultQueryFields = [
    "name",
    "title",
    "keyword",
    "description",
    "publish",
    "createdAt"
  ];
  constructor(
    @InjectModel("Page") protected readonly model: Model<PageModel>,
    @InjectModel("Content")
    protected readonly contentModel: Model<ContentModel>
  ) {
    super(model);
  }

  async createPage(entry: CreatePageReq): Promise<PageModel> {
    const content = entry.content;
    entry.content = null;
    const doc = new this.model(entry);
    const result = await doc.save();

    await this.contentModel
      .findOneAndUpdate(
        { _id: result.id },
        {
          $set: {
            _id: result.id,
            text: content
          }
        },
        { upsert: true, new: true }
      )
      .exec();

    return result;
  }

  async updatePage(entry: EditPageReq): Promise<PageModel> {
    const content = entry.content;
    entry.content = entry.id;
    const doc = await this.model
      .findOneAndUpdate(
        {
          _id: entry.id
        },
        entry,
        { upsert: true, new: true }
      )
      .exec();

    await this.contentModel
      .findOneAndUpdate(
        { _id: entry.id },
        {
          text: content
        },
        { upsert: true, new: true }
      )
      .exec();
    return doc;
  }

  async get(id: string): Promise<PageRes> {
    const instance = await this.model
      .findById(id)
      .populate("content", {
        text: 1
      })
      .exec();

    if (instance) {
      const result = instance.toJSON();
      if (result.content) {
        result.content = (result.content as any).text;
      }
      return result;
    }
    throw new CustomException("Page not found", HttpStatus.NOT_FOUND);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<PageModel>> {
    return super.query(
      page,
      size,
      {},
      { keyword, field: "name" },
      this.defaultQueryFields,
      sort
    );
  }
}

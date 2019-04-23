import { Injectable, HttpStatus } from "@nestjs/common";
import { MongooseService, ResultList, CustomException } from "nestx-common";
import { ArticleModel, ContentModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ArticleRes, EditArticleDto, CreateArticleDto } from "../dto";

@Injectable()
export class ArticleService extends MongooseService<ArticleModel> {
  defaultQueryFields = [
    "name",
    "title",
    "keyword",
    "picture",
    "category",
    "description",
    "author",
    "sort",
    "disable",
    "meta",
    "template"
  ];
  constructor(
    @InjectModel("Article") protected readonly model: Model<ArticleModel>,
    @InjectModel("Content")
    protected readonly contentModel: Model<ContentModel>
  ) {
    super(model);
  }

  async createArticle(entry: CreateArticleDto): Promise<ArticleModel> {
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

  async updateArticle(entry: EditArticleDto): Promise<ArticleModel> {
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

  async getArticle(id: string): Promise<ArticleRes> {
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
    throw new CustomException("Article not found", HttpStatus.NOT_FOUND);
  }

  async querySearch(
    keyword: string,
    page: number,
    size: number,
    sort: string
  ): Promise<ResultList<ArticleModel>> {
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

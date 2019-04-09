import { Injectable } from "@nestjs/common";
import { MongooseService } from "./../../common/services/mongoose.service";
import { ArticleModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ArticleService extends MongooseService<ArticleModel> {

    defaultQueryFields = ['name', 'translate', 'expand'];
    constructor(
        @InjectModel('Article') protected readonly model: Model<ArticleModel>
    ) {
        super(model);
    }
}
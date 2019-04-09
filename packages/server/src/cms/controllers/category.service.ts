import { Injectable } from "@nestjs/common";
import { MongooseService } from "./../../common/services/mongoose.service";
import { CategoryModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CategoryService extends MongooseService<CategoryModel> {

    defaultQueryFields = ['name', 'translate', 'expand'];
    constructor(
        @InjectModel('Category') protected readonly model: Model<CategoryModel>
    ) {
        super(model);
    }
}
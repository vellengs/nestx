import { Injectable } from "@nestjs/common";
import { MongooseService } from "./../../common/services/mongoose.service";
import { WidgetModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class WidgetService extends MongooseService<WidgetModel> {

    defaultQueryFields = ['name', 'translate', 'expand'];
    constructor(
        @InjectModel('Widget') protected readonly model: Model<WidgetModel>
    ) {
        super(model);
    }
}
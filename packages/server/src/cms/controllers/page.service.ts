import { Injectable } from "@nestjs/common";
import { MongooseService } from "./../../common/services/mongoose.service";
import { PageModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class PageService extends MongooseService<PageModel> {

    defaultQueryFields = ['name', 'translate', 'expand'];
    constructor(
        @InjectModel('Page') protected readonly model: Model<PageModel>
    ) {
        super(model);
    }
}
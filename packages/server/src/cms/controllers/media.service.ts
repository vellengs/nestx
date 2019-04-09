import { Injectable } from "@nestjs/common";
import { MongooseService } from "./../../common/services/mongoose.service";
import { MediaModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class MediaService extends MongooseService<MediaModel> {

    defaultQueryFields = ['name', 'translate', 'expand'];
    constructor(
        @InjectModel('Media') protected readonly model: Model<MediaModel>
    ) {
        super(model);
    }
}
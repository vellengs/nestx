import { Injectable } from "@nestjs/common";
import { MongooseService } from "./../../common/services/mongoose.service";
import { PhotoModel } from "./../interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class PhotoService extends MongooseService<PhotoModel> {

    defaultQueryFields = [
        'name',
        'caption',
        'description',
        'ext',
        'url',
        'uri'];
    constructor(
        @InjectModel('Photo') protected readonly model: Model<PhotoModel>
    ) {
        super(model);
    }
}
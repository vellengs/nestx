import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Photo } from './interface/photo.interface';

@Injectable()
export class PhotoService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<Photo>) { }
}

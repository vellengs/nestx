import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) { }

  async create(dto: CreateUserDto): Promise<User> {
    const model = new this.userModel(dto);
    return await model.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}

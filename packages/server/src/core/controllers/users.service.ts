import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from './../interfaces';
import { MongooseService } from './../mongoose.service';
import { RegisterReq } from 'auth/dto/Register.dto';

@Injectable()
export class UsersService extends MongooseService<UserModel> {

  defaultQueryFields = [
    'username',
    'avatar',
    'email',
    'name',
    'email',
    'mobile',
    'isAdmin',
    'isApproved',
    'expired',
  ];

  constructor(@InjectModel('User') protected readonly model: Model<UserModel>) {
    super(model);
  }

  async register(entry: RegisterReq): Promise<User> {
    entry.name = entry.name || entry.username;
    const instance = new this.model(entry);
    return await instance.save();
  }

  async login(account: string, password: string): Promise<User | false> {
    const instance = await this.model.findOne({ username: account });
    if (instance) {
      return new Promise<User | false>((resolve, reject) => {
        instance.comparePassword(password, (err: Error, isMatch: boolean) => {
          if (err) { return reject(err); }
          if (isMatch) {
            resolve(instance);
          }
          resolve(false);
        });
      });
    }
    return false;
  }

}

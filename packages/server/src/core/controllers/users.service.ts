import { Model, Document } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel, VeryCodeModel } from './../interfaces';
import {
  MongooseService,
  IdentifyEntry,
  Criteria,
  SearParam,
  ResultList,
} from './../../common';
import { RegisterReq } from './../../auth/dto/Register.dto';
import { ObjectID } from 'typeorm';
import { EditProfileReq, UserRes } from './../dto';
import { ObjectId } from 'bson';
import { Utils } from 'utils';

const FIVE_MINUTES = 5 * 60 * 1000; // 5 mins
const ONE_MINUTE = 1 * 60 * 1000; // 1 mins
const SMS_VERIFICATION_CONTENT = `sms template {0}`;

@Injectable()
export class UsersService extends MongooseService<UserModel> {
  defaultQueryFields = [
    'username',
    'avatar',
    'email',
    'name',
    'mobile',
    'isAdmin',
    'isApproved',
    'expired',
  ];

  constructor(
    @InjectModel('User')
    protected readonly model: Model<UserModel>,
    @InjectModel('Profile')
    protected readonly profileModel: Model<UserModel>,
    @InjectModel('VeryCode')
    private readonly veryCodeModel: Model<VeryCodeModel>,
  ) {
    super(model);
  }

  async querySearch(
    keyword: string,
    group: string,
    role: string,
    page: number,
    size: number,
    sort: string,
  ): Promise<ResultList<UserModel>> {
    let groups, roles;
    if (group) {
      groups = { $in: group };
    }
    if (role) {
      roles = { $in: role };
    }
    return super.query(
      page,
      size,
      {
        groups,
        roles,
      },
      { keyword, field: 'name' },
      this.defaultQueryFields,
      sort,
    );
  }

  async register(entry: RegisterReq): Promise<User> {
    entry.name = entry.name || entry.username;
    const { name, email, password, username, mobile, mobilePrefix } = entry;
    const instance = new this.model({
      name,
      email,
      password,
      username,
      mobile,
      mobilePrefix,
    }); // only accept those fields
    return await instance.save();
  }

  async login(account: string, password: string): Promise<User | false> {
    const instance = await this.model.findOne({ username: account });
    if (instance) {
      return new Promise<User | false>((resolve, reject) => {
        instance.comparePassword(password, (err: Error, isMatch: boolean) => {
          if (err) {
            return reject(err);
          }
          if (isMatch) {
            resolve(instance);
          }
          resolve(false);
        });
      });
    }
    return false;
  }

  async findById(id: string | number | ObjectID): Promise<UserModel> {
    const user = await this.model.findById(id).exec();
    if (user) {
      user.name = user.name || user.username;
    }
    return user;
  }

  async removeUserFromRole(role: string, accountId: string) {
    if (role && accountId) {
      await this.model
        .update(
          {
            _id: {
              $in: accountId,
            },
          },
          { $pullAll: { roles: [role] } },
          { multi: true },
        )
        .exec();
    }
    return { ok: true };
  }

  async addAccountsToRole(role: string, accountIds: string[] | string) {
    if (!Array.isArray(accountIds) && ObjectId.isValid(accountIds)) {
      accountIds = [accountIds];
    }

    if (role && Array.isArray(accountIds)) {
      const existIds = await this.model
        .find(
          {
            _id: {
              $in: accountIds,
            },
            roles: {
              $in: [role],
            },
          },
          { _id: 1 },
        )
        .exec();

      const exists = (existIds || []).map((item: Document) =>
        item._id.toString(),
      );
      const ids = accountIds.filter(id => {
        return exists.indexOf(id) === -1;
      });

      const effects = await this.model
        .update(
          {
            _id: {
              $in: ids,
            },
          },
          { $push: { roles: role } },
          { multi: true },
        )
        .exec();
    }

    return { ok: true };
  }

  async updateProfile(userId: string, entry: EditProfileReq): Promise<UserRes> {
    const profileModel = await this.profileModel
      .findOneAndUpdate(
        {
          _id: userId,
        },
        entry,
        { upsert: true, new: true },
      )
      .exec();

    const profile = profileModel._id;
    const user = await this.model
      .findOneAndUpdate(
        {
          _id: userId,
        },
        {
          profile,
          ...entry,
        },
        { new: true },
      )
      .populate('profile')
      .exec();

    if (profile) {
      const instance = this.plainProfile(user);
      return instance;
    }
    return null;
  }

  async getProfile(entry: IdentifyEntry) {
    const user = await this.model
      .findById(entry)
      .populate('profile')
      .exec();
    return this.plainProfile(user);
  }

  async sendVeryCode(mobile: string): Promise<string> {
    const sms = await this.veryCodeModel
      .findOne({
        mobile,
        lastSent: {
          $gte: Date.now() - ONE_MINUTE,
        },
      })
      .exec();
    if (sms && process.env.NODE_ENV !== 'test') {
      return Promise.reject('Request too often.');
    }
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      const date = Date.now();
      const code = '123456';
      await new this.veryCodeModel({ mobile, code, lastSent: date }).save();
      return Promise.resolve(code);
    }
    const code = '123456'; // + require("rander").between(100000, 999999);
    // const content = SMS_VERIFICATION_CONTENT.replace("{0}", code);
    // const result = await callSmsSent(mobile, content);
    // if (!result) return;
    await new this.veryCodeModel({ mobile, code }).save();
    return Promise.resolve(code);
  }

  async verifyCode(code: string, mobile: string): Promise<boolean> {
    return true; // TODO;
    const instance = await this.veryCodeModel.findOne({
      code,
      mobile,
      lastSent: {
        $gte: Date.now() - ONE_MINUTE,
      },
    });
    return instance ? true : false;
  }

  private plainProfile(user?: UserModel) {
    if (!user) {
      return null;
    }
    const doc = user.toObject();
    const instance = Object.assign({}, doc, doc.profile);
    instance.id = doc._id;
    delete instance.profile;
    delete instance._id;
    delete instance.__v;
    delete instance.password;
    instance.createdAt = doc.createdAt;
    return instance;
  }
}

import { Injectable } from '@nestjs/common';
import { Installer } from './../scripts/data.install';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'nestx-base';

@Injectable()
export class MockService {
  private install: Installer;
  constructor(
    @InjectModel('User')
    protected readonly model: Model<UserModel>,
  ) {
    this.install = new Installer(model.db);
  }

  async initDatabase(): Promise<boolean> {
    if (process.env.NODE_ENV === 'test') {
      await this.install.initData();
    } else {
      Promise.reject('mock method only run on test env');
    }
    return true;
  }

  async resetDatabase(): Promise<boolean> {
    if (process.env.NODE_ENV === 'test') {
      await this.install.reset();
    } else {
      Promise.reject('mock method only run on test env');
    }
    return true;
  }
}

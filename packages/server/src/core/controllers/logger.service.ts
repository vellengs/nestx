import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LogModel, Log } from './../interfaces';

@Injectable()
export class LoggerService {
  constructor(@InjectModel('Log') protected readonly model: Model<LogModel>) {}

  async log(log: {
    controller: string;
    method: string;
    username: string;
    userId: string;
    elapsed: number;
    ip: string;
    result?: number;
    comment?: string;
  }) {
    const name = `${log.controller}/${log.method}`;
    const operator = log.userId;
    const operatorName = log.username;
    const operation = `${log.controller}/${log.method}`;
    const { ip, elapsed, result, comment } = log;
    return new this.model({
      name,
      operator,
      operatorName,
      ip,
      operation,
      result,
      elapsed,
      comment,
    }).save();
  }
}

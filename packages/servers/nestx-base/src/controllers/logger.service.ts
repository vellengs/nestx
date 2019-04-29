import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { Log } from "./../schemas";

@Injectable()
export class LoggerService {
  constructor(@InjectModel(Log) protected readonly model: ModelType<Log>) {}

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
      comment
    }).save();
  }
}

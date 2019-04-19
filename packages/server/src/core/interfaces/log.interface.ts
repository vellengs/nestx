import { Document } from 'mongoose';

export interface Log {
  id: string;
  name: string; // 日志名称
  operator: string; // 操作人id
  operatorName: string; // 操作人
  ip: string; // 操作人 IP
  operation: string; // 操作事件;
  result: number; // 操作结果
  elapsed: number; // 耗时
  comment?: string; // 备注
  createdAt?: Date; // 创建日期
}

export type LogModel = Log & Document;

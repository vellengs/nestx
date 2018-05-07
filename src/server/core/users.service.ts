import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';
import { ChangePasswordDto } from './dto/change-password.dto';
import { EditUserDto } from './dto/edit-user.dto';
import { ChangeRolesDto } from './dto/change-roles.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) { }

  /**
   * 修改帐号的密码
   * @param dto 实体对象
   */
  async changePassword(dto: ChangePasswordDto): Promise<User> {
    const model = new this.userModel(dto);
    return await model.save();
  }

  /**
   * 禁用帐号
   * @param conditions 查询条件
   */
  async bannedUser(conditions?: any): Promise<void> {
    const exist: User = await this.userModel.findOne(conditions);
    // TODO
  }

  /**
   * 启用帐号
   * @param conditions 查询条件
   */
  async unBannedUser(conditions?: any): Promise<void> {
    const exist: User = await this.userModel.findOne(conditions);
  }

  /**
   * 创建帐号
   * @param dto 实体
   */
  async create(dto: CreateUserDto): Promise<User> {
    const model = new this.userModel(dto);
    return await model.save();
  }


  async changeRoles(dto: ChangeRolesDto): Promise<User> {
    const model = new this.userModel(dto);
    return await model.save();
  }

  /**
   * 编辑帐号
   * @param dto 实体
   */
  async edit(dto: EditUserDto): Promise<User> {
    const model = new this.userModel(dto);
    return await model.save();
  }


  /**
   * 查询帐号
   */
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  /**
   * 查询一个帐号
   */
  async findOne(conditions?: any): Promise<User> {
    return await this.userModel.findOne(conditions).exec();
  }


}

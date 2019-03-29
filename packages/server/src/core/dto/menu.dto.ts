import { IsString, IsInt, IsJSON } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class EditMenuRes {
   name: string;								// 菜单名称
   slug: string;								// 标识串
   group: boolean;              // 是否是分组
   link: string;								// 菜单链接
   order: number;								// 顺序
   externalLink: string;        // 扩展链接
   blank: boolean;              // 窗口打开方式
   icon: string;								// 图标
   badge: string;								//
   badgeDot: string;            //
   badgeStatus: string;         //
   enable: boolean;							// 隐藏
   expanded: boolean;
   acl: string;                 // 访问控制
   paths: any[];								// 菜单路径
   parent: string;						  // 父级菜单
   permissions?: any[];
   isMenu: boolean;							// 是否是菜单
}

export class CreateMenuRes {
   name: string;								// 菜单名称
   slug: string;								// 标识串
   group: boolean;              // 是否是分组
   link: string;								// 菜单链接
   order: number;								// 顺序
   externalLink: string;        // 扩展链接
   blank: boolean;              // 窗口打开方式
   icon: string;								// 图标
   badge: string;								//
   badgeDot: string;            //
   badgeStatus: string;         //
   enable: boolean;							// 隐藏
   expanded: boolean;
   acl: string;                 // 访问控制
   paths: any[];								// 菜单路径
   parent: string;						  // 父级菜单
   permissions?: any[];
   isMenu: boolean;							// 是否是菜单
}



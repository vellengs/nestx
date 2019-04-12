import { IsString, IsBoolean, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateMenuReq {
   @IsString()
   name: string;								// 菜单名称
   @IsString()
   slug: string;								// 标识串
   @IsBoolean()
   group: boolean;              // 是否是分组
   @IsString()
   link: string;								// 菜单链接

   @IsOptional()
   @IsNumber()
   order?: number;								// 顺序

   @IsOptional()
   @IsString()
   externalLink?: string;        // 扩展链接

   @IsOptional()
   @IsBoolean()
   blank: boolean;              // 窗口打开方式

   @IsOptional()
   @IsString()
   icon?: string;								// 图标

   @IsOptional()
   badge?: string;								//
   @IsOptional()
   badgeDot?: string;            //
   @IsOptional()
   badgeStatus?: string;         //

   @IsOptional()
   @IsBoolean()
   enable: boolean;							// 隐藏

   @IsOptional()
   @IsBoolean()
   expanded: boolean;

   @IsOptional()
   @IsString()
   acl?: string;                 // 访问控制
   paths?: any[];								// 菜单路径

   @IsOptional()
   @IsString()
   parent?: string;						  // 父级菜单

   @IsOptional()
   @IsArray()
   permissions?: any[];

   @IsBoolean()
   isMenu: boolean;							// 是否是菜单
}

export class EditMenuReq {
   @IsString()
   id: string;								// 菜单名称
   @IsString()
   name: string;								// 菜单名称
   @IsString()
   slug: string;								// 标识串
   @IsBoolean()
   group: boolean;              // 是否是分组
   @IsString()
   link: string;								// 菜单链接

   @IsOptional()
   @IsNumber()
   order?: number;								// 顺序

   @IsOptional()
   @IsString()
   externalLink?: string;        // 扩展链接

   @IsOptional()
   @IsBoolean()
   blank: boolean;              // 窗口打开方式

   @IsOptional()
   @IsString()
   icon?: string;								// 图标

   @IsOptional()
   badge?: string;								//
   @IsOptional()
   badgeDot?: string;            //
   @IsOptional()
   badgeStatus?: string;         //

   @IsOptional()
   @IsBoolean()
   enable: boolean;							// 隐藏

   @IsOptional()
   @IsBoolean()
   expanded: boolean;

   @IsOptional()
   @IsString()
   acl?: string;                 // 访问控制
   paths?: any[];								// 菜单路径

   @IsOptional()
   @IsString()
   parent?: string;						  // 父级菜单

   @IsOptional()
   @IsArray()
   permissions?: any[];

   @IsBoolean()
   isMenu: boolean;							// 是否是菜单
}

export class MenuRes {
   id: string;
   name: string;								// 菜单名称
   slug: string;								// 标识串
   group: boolean;              // 是否是分组
   link: string;								// 菜单链接
   order?: number;								// 顺序
   externalLink?: string;        // 扩展链接
   blank: boolean;              // 窗口打开方式
   icon?: string;								// 图标
   badge?: string;								//
   badgeDot?: string;            //
   badgeStatus?: string;         //
   enable: boolean;							// 隐藏
   expanded: boolean;
   acl?: string;                 // 访问控制
   paths?: any[];								// 菜单路径
   parent?: string;						  // 父级菜单
   permissions?: any[];
   isMenu: boolean;							// 是否是菜单
}
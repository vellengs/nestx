
import { Document } from 'mongoose';

export interface Profile {
    id: string;
    company: string;        // 公司名称
    siteUrl: string;	    // 站点URL
    address: any;           // 地址 
}
export type ProfileModel = Profile & Document;
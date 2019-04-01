import request from '@/utils/request';
import { ProxyCall } from './api';
import { HttpClient } from './client';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return ProxyCall<string>(async () => {
    const res = await HttpClient.coreApi.usersProfile();
    const profile = res.data;
    // return request('/api/currentUser');
    return {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [],
      notifyCount: 1,
      unreadCount: 10,
      country: 'China',
      address: '西湖区工专路 77 号',
      phone: '0752-268888888'
    };
  });
}

export async function queryNotices(params: any = {}) {
  let { keyword, index, size } = params;
  return ProxyCall<string>(async () => {
    const res = await HttpClient.coreApi.noticesQuery(keyword, index, size);
    return res.data;
  });
}

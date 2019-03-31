import request from '@/utils/request';
import { ProxyCall } from './api';
import { HttpClient } from './client';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  const res = await HttpClient.coreApi.usersProfile();
  console.log('res', res.data);
  return request('/api/currentUser');
}

export async function queryNotices(params: any = {}) {
  let { keyword, index, size } = params;
  return ProxyCall<string>(async () => {
    const res = await HttpClient.coreApi.noticesQuery(keyword, index, size);
    return res.data;
  });
}

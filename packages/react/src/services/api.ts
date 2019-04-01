import { stringify } from 'qs';
import request from '@/utils/request';
import { HttpClient } from './client';

// type ApiMethod = (fn:any)<T>=>

export async function ProxyCall<T>(call: any, error?: object) {
  try {
    const result: T = await call();
    return {
      status: 'ok',
      ...result,
    };
  } catch (ex) {
    return {
      status: 'error',
      ...error,
    };
  }
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params: any) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params: any) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: any) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: any = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function submitForm(params: any) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function chartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile(id: string) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryList(params: any) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeList(params: any) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addList(params: any) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateList(params: any) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function accountLogin(params: { username: string; password: string; type: string }) {
  const { type } = params;
  return ProxyCall<string>(
    async () => {
      const res = await HttpClient.authApi.authLogin(params);
      return {
        currentAuthority: res.data.accessToken
      };
    },
    {
      type,
      currentAuthority: 'guest',
    },
  );
}

export async function accountLogout() {
  const res = await HttpClient.authApi.authLogout();
  return res.data;
}

export async function register(params: {
  mail: string;
  password: string;
  confirm: string;
  mobile: string;
  captcha: string;
  prefix: string;
}) {
  return ProxyCall<string>(
    async () => {
      const res = await HttpClient.authApi.authRegister({
        username: params.mail,
        password: params.password,
        email: params.mail,
        mobile: params.mobile,
        veryCode: params.captcha,
        mobilePrefix: params.prefix,
      });
      return res.data;
    },
    {
      currentAuthority: 'guest',
    },
  );
}

export async function getCaptcha(mobile: string) {
  return HttpClient.authApi.authCaptcha(mobile);
}

import globalAxios from 'axios';
import { Configuration, CoreApi, AppApi, DefaultApi, AuthApi } from '../generated';
import { notification } from 'antd';

interface ResponseError<D = any> extends Error {
  name: string;
  data: D;
  response: Response;
}

export const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const config = new Configuration({
  basePath: 'http://localhost:5600/api',
});

export class Client {
  private static client: Client;
  public authApi = new AuthApi(config);
  public coreApi = new CoreApi(config);
  public defaultApi = new DefaultApi(config);
  public appApi = new AppApi(config);

  public static get instance() {
    if (!this.client) {
      this.client = new Client();
    }
    return this.client;
  }
  private constructor() { }

  public setToken(accessToken: string): void {
    return localStorage.setItem('nest-react-token', JSON.stringify(accessToken));
  }

  public getToken() {
    const tokenString = localStorage.getItem('nest-react-token');
    let token;
    try {
      token = JSON.parse(tokenString!);
    } catch (e) {
      token = '';
    }
    return token;
  }

  public async removeToken(): Promise<any> {
    await localStorage.removeItem('nest-react-token');
    await localStorage.removeItem('antd-pro-authority');
  }
}
export const HttpClient = Client.instance;

export const errorHandler = (error: ResponseError) => {
  const { response = {} as Response } = error;
  const errorText = codeMessage[response.status] || response.statusText;
  const { status } = response;

  if (status === 401) {
    HttpClient.removeToken();
  }

  notification.error({
    message: `请求错误 ${status}:`,
    description: errorText,
  });
};

globalAxios.interceptors.request.use(
  config => {
    if (config.baseURL === config.baseURL && !config.headers.Authorization) {
      const token = HttpClient.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

globalAxios.interceptors.response.use(response => {
  return response;
}, errorHandler);

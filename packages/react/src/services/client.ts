import globalAxios from 'axios';
import { Configuration, CoreApi, AppApi, DefaultApi, AuthApi } from '../generated';
import { errorHandler } from '@/utils/request';

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
  private constructor() {}

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

  public removeToken(): void {
    return localStorage.removeItem('nest-react-token');
  }
}
export const HttpClient = Client.instance;

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
  function(error) {
    return Promise.reject(error);
  },
);

// TODO;
globalAxios.interceptors.response.use(response => {
  return response;
}, errorHandler);

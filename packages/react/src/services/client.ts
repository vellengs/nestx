import globalAxios from 'axios';
import { getAuthority } from '@/utils/authority';
import { Configuration, CoreApi, AppApi, DefaultApi, AuthApi } from '../generated';
import { errorHandler } from '@/utils/request';

const config = new Configuration({
  basePath: 'http://localhost:5600/api',
});

globalAxios.interceptors.request.use(
  config => {
    if (config.baseURL === config.baseURL && !config.headers.Authorization) {
      const token = getAuthority();
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
}
export const HttpClient = Client.instance;

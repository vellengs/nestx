import globalAxios from 'axios';
import { Configuration, CoreApi, AppApi, DefaultApi, AuthApi , MockApi} from '../generated';

const store = new Map();

function getToken(): string {
  return store.get('token');
}

function setToken(token: string) {
  store.set('token', token);
}

const config = new Configuration({
  basePath: 'http://localhost:5600/api',
});

globalAxios.interceptors.request.use(
  config => {
    if (config.baseURL === config.baseURL && !config.headers.Authorization) {
      const token = getToken();
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

// TODO;
// globalAxios.interceptors.response.use(response => {
//   return response;
// }, errorHandler);

export class Client {
  private static client: Client;
  public authApi = new AuthApi(config);
  public mockApi = new MockApi(config);
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
}
export const HttpClient = Client.instance;

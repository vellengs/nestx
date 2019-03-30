import { Configuration, CoreApi, AppApi, DefaultApi } from '../generated';
const config = new Configuration({
  basePath: 'http://localhost:5600/api',
});

export class Client {
  private static client: Client;
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

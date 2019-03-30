import { Configuration, CoreApi, AppApi, DefaultApi } from '../generated';
const config: Configuration = {
  basePath: 'http://localhost:5600',
};
export class Client {
  private static client: Client;
  public coreApi = new CoreApi(config);
  public defaultApi = new DefaultApi(config);
  public appApi = new AppApi(config);
  public static get instance() {
    if (!this.client) {
      this.client = new Client();
      this.client.coreApi = new CoreApi();
    }
    return this.client;
  }
  private constructor() {}
}
export const HttpClient = Client.instance;

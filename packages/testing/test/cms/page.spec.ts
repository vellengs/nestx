import { HttpClient } from "./../../scripts/client";
import { login } from "../utils/login";

describe("page module test", () => {
  beforeAll(async () => {
    await HttpClient.initDatabase();
    await login();
  });

  afterAll(async () => {});

  it("[post] /page/", async () => {
    const reqBody = {
      name: "home",
      keyword: "home",
      title: "首页",
      description: "一个首页测试",
      sort: 100,
      disable: false,
      publish: "2019-04-19T16:02:14.398Z",
      content: "<a>test content</a>"
    };
    const res = await HttpClient.cmsApi.pageCreate(reqBody);
    expect(res.status).toBe(201);
    expect(res.data.name).toBe(reqBody.name);
    expect(res.data.title).toBe(reqBody.title);
  });

  it("[put] /page/", async () => {
    const reqBody = {
      id: "5cb9f10655654febb1fcd715",
      name: "demo",
      keyword: "key of demo",
      title: "you title",
      description: "description of page",
      sort: 100,
      disable: false,
      content: "<p>example</p>"
    };
    const res = await HttpClient.cmsApi.pageUpdate(reqBody);
    expect(res.status).toBe(200);
  });

  it("[get] /page/search", async () => {
    const res = await HttpClient.cmsApi.pageSearch();
    expect(res.status).toBe(200);
  });

  it("[get] /page/query", async () => {
    const res = await HttpClient.cmsApi.pageQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /page/{id}", async () => {
    const id = "5cb9f10655654febb1fcd715";
    const res = await HttpClient.cmsApi.pageFindOne(id);
    expect(res.status).toBe(200);
  });

  it.skip("[delete] /page/{id}", async () => {
    const id = "5cb9f10655654febb1fcd715";
    const res = await HttpClient.cmsApi.pageRemove(id);
    expect(res.status).toBe(200);
  });
});

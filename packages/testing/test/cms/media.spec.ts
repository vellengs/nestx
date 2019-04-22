import { HttpClient } from "./../../scripts/client";
import { login } from "../utils/login";

describe("media module test", () => {
  let createdId: string;
  beforeAll(async () => {
    await HttpClient.initDatabase();
    await login();
  });

  afterAll(async () => {});

  it("[post] /media/", async () => {
    const reqBody = {
      name: "test",
      caption: "hi this caption",
      description: "this is a demo description",
      ext: ".jpg",
      url: "http://www.demo.com/wapi.jpg"
    };
    const res = await HttpClient.cmsApi.mediaCreate(reqBody);
    createdId = res.data.id;
    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty("id");
  });

  it("[put] /media/", async () => {
    const reqBody = {
      id: createdId,
      name: "updated name",
      caption: "updated caption",
      description: "updated description",
      ext: ".gif",
      url: "http://demo.updated.com"
    };
    const res = await HttpClient.cmsApi.mediaUpdate(reqBody);
    expect(res.status).toBe(200);
  });

  it("[get] /media/search", async () => {
    const res = await HttpClient.cmsApi.mediaSearch();
    expect(res.status).toBe(200);
  });

  it("[get] /media/query", async () => {
    const res = await HttpClient.cmsApi.mediaQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /media/{id}", async () => {
    const res = await HttpClient.cmsApi.mediaFindOne(
      "5cbd29ddd794ccd75c6b7fec"
    );
    expect(res.status).toBe(200);
  });

  it("[delete] /media/{id}", async () => {
    const res = await HttpClient.cmsApi.mediaRemove(createdId);
    expect(res.status).toBe(200);
  });
});

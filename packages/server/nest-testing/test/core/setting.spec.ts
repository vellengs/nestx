import { HttpClient } from "./../../scripts/client";
import { login } from "../utils/login";

describe("setting module test", () => {
  beforeAll(async () => {
    await HttpClient.initDatabase();
    await login();
  });

  afterAll(async () => {});

  it("[post] /setting/", async () => {
    const reqBody = {
      name: "hi",
      key: "demo",
      value: "value0001",
      description: "test item"
    };
    const res = await HttpClient.coreApi.settingsCreate(reqBody);
    expect(res.status).toBe(201);
  });

  it("[put] /setting/", async () => {
    const reqBody = {
      id: "5b0d006899f6ac12569afb05",
      name: "demoName",
      key: "kv",
      value: "value as demo",
      description: "demo desc"
    };
    const res = await HttpClient.coreApi.settingsUpdate(reqBody);
    expect(res.status).toBe(200);
  });

  it("[put] /setting/name/{name}", async () => {
    const name = "demo";
    const entry = {
      options: {
        code: "values xxx",
        domain: "example xxxxx"
      }
    };
    const res = await HttpClient.coreApi.settingsUpdateSettingsByName(
      name,
      entry
    );
    expect(res.status).toBe(200);
  });

  it("[get] /setting/name/{name}", async () => {
    const name = "main";
    const res = await HttpClient.coreApi.settingsGetSettingsByName(name);
    expect(res.status).toBe(200);
  });

  it("[get] /setting/search", async () => {
    const keyword = "mai";
    const res = await HttpClient.coreApi.settingsSearch(keyword);
    expect(res.status).toBe(200);
  });

  it("[get] /setting/query", async () => {
    const res = await HttpClient.coreApi.settingsQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /setting/key/{key}", async () => {
    const key = "name";
    const res = await HttpClient.coreApi.settingsGetSettingsByKey(key);
    expect(res.status).toBe(200);
  });

  it("[get] /setting/{id}", async () => {
    const res = await HttpClient.coreApi.settingsFindOne(
      "5b0d006899f6ac12569afb05"
    );
    expect(res.status).toBe(200);
  });
});

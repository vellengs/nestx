import { HttpClient } from "./../../scripts/client";
import { login } from "../utils/login";

describe("group module test", () => {
  beforeAll(async () => {
    await HttpClient.initDatabase();
    await login();
  });

  afterAll(async () => {});

  it("[post] /group/", async () => {
    const reqBody = {
      name: "demo",
      icon: "icon-desktop",
      order: 100,
      isRegion: false,
      description: "description of example"
    };
    const res = await HttpClient.coreApi.groupsCreate(reqBody);
    expect(res.status).toBe(201);
  });

  it("[put] /group/", async () => {
    const reqBody = {
      id: "5b2766a3177e2c274909cb6d",
      name: "editedName",
      icon: "icon-example",
      order: 100,
      isRegion: false,
      description: "an demo of edit group"
    };
    const res = await HttpClient.coreApi.groupsUpdate(reqBody);
    expect(res.status).toBe(200);
  });

  it("[get] /group/search", async () => {
    const keyword = "demo";
    const res = await HttpClient.coreApi.groupsSearch(keyword);
    expect(res.status).toBe(200);
  });

  it("[get] /group/users", async () => {
    const res = await HttpClient.coreApi.groupsGetGroupedUsers();
    expect(res.status).toBe(200);
  });

  it("[get] /group/query", async () => {
    const res = await HttpClient.coreApi.groupsQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /group/{id}", async () => {
    const res = await HttpClient.coreApi.groupsFindOne(
      "5b2766a3177e2c274909cb6d"
    );
    expect(res.status).toBe(200);
  });
});

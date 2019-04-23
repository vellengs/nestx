import { HttpClient } from "./../../scripts/client";
import { CreateRoleReq, EditRoleReq } from "./../../generated";
import { login } from "../utils/login";

describe("role module test", () => {
  beforeAll(async () => {
    await HttpClient.initDatabase();
    await login();
  });

  afterAll(async () => {});

  it("[post] /role/", async () => {
    const reqBody: CreateRoleReq = {
      name: "demo",
      description: "test",
      permissions: []
    };
    const res = await HttpClient.coreApi.rolesCreate(reqBody);
    expect(res.status).toBe(201);
  });

  it("[put] /role/", async () => {
    const reqBody: EditRoleReq = {
      id: "5b1e8b3e59989d1ffc06ac7e",
      name: "Update test",
      description: "test",
      permissions: []
    };
    const res = await HttpClient.coreApi.rolesUpdate(reqBody);
    expect(res.status).toBe(200);
  });

  it("[get] /role/search", async () => {
    const keyword = "";
    const value = "";
    const res = await HttpClient.coreApi.rolesSearch(keyword, value);
    expect(res.status).toBe(200);
  });

  it("[get] /role/query", async () => {
    const res = await HttpClient.coreApi.rolesQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /role/{id}", async () => {
    const id = "5b1e8b3e59989d1ffc06ac7e";
    const res = await HttpClient.coreApi.rolesFindOne(id);
    expect(res.status).toBe(200);
  });
});

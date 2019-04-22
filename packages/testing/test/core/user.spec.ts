import { HttpClient } from "./../../scripts/client";
import { login } from "../utils/login";

describe("user module test", () => {
  beforeAll(async () => {
    await HttpClient.initDatabase();
    await login();
  });

  beforeAll(async () => {});

  it("[post] /user/", async () => {
    const reqBody = {
      username: "demo001",
      password: "psw0121",
      avatar: "http://www.avatar.com/example.jpg",
      email: "demo001@",
      name: "same",
      mobile: "13069099883",
      isAdmin: true,
      isApproved: true,
      isDisable: false,
      expired: new Date(2109, 1, 10).getTime(),
      company: "A demo name of company",
      siteUrl: "http://wwww.example.com",
      address: "baba 012 add ss"
    };
    const res = await HttpClient.coreApi.usersCreate(reqBody);
    expect(res.status).toBe(201);
    expect(res.data.username).toBe(reqBody.username);
    expect(res.data.isAdmin).toBe(reqBody.isAdmin);
  });

  it("[get] /user/profile", async () => {
    const res = await HttpClient.coreApi.usersProfile();
    expect(res.status).toBe(200);
    expect(res.data.username).toBeDefined();
    expect(res.data.roles.length).toBeGreaterThan(1);
    expect(res.data.password).toBeUndefined();
  });

  it("[put] /user/profile", async () => {
    const reqBody = {
      name: "newName",
      mobile: "13029999211",
      email: "new@mail.com",
      company: "new company name",
      siteUrl: "http://www.new-domain.com",
      address: "this is a demo of address"
    };
    const res = await HttpClient.coreApi.usersUpdateProfile(reqBody);
    expect(res.status).toBe(200);
  });

  it("[put] /user/password", async () => {
    const reqBody = {
      oldPassword: "helloTest",
      newPassword: "newpasspsd",
      confirm: "newpasspsd"
    };
    // TODO;
    // const res = await HttpClient.coreApi.usersChangePassword(reqBody);
    // expect(res.status).toBe(200);
    // expect(res.data.ok).toBe(true);
  });

  it("[put] /user/", async () => {
    const user = await HttpClient.coreApi.usersFindOne(
      "5b31eba49a674f606f7c5849"
    );
    const reqBody = {
      id: user.data.id,
      name: "new new of user",
      mobile: "13012345678",
      password: "helloTest",
      email: "demo002@demo.com",
      company: "example of company",
      siteUrl: "http://www.example.com",
      address: "test address name"
    };

    const res = await HttpClient.coreApi.usersUpdate(reqBody);
    expect(res.status).toBe(200);
    expect(res.data.name).toBe(reqBody.name);
    expect(res.data.mobile).toBe(reqBody.mobile);
    expect(res.data.email).toBe(reqBody.email);
  });

  it("[post] /user/role", async () => {
    const reqBody = {
      role: "5b1e8b3e59989d1ffc06ac7e",
      userIds: [
        "5b31eba49a674f606f3c5841",
        "5b31eba49a674f606f3c5842",
        "5b31eba49a674f606f3c5843"
      ]
    };
    const res = await HttpClient.coreApi.usersAddUsersToRole(reqBody);
    expect(res.status).toBe(201);
    expect(res.data.ok).toBe(true);
  });

  it("[delete] /user/role", async () => {
    const role = "5b1e8b3e59989d1ffc06ac7e";
    const id = "5b31eba49a674f606f3c5841";
    const res = await HttpClient.coreApi.usersRemoveAccountFromRole(role, id);
    expect(res.status).toBe(200);
    expect(res.data.ok).toBe(true);
  });

  it("[get] /user/search", async () => {
    const keyword = "zhan";
    const res = await HttpClient.coreApi.usersSearch(keyword);
    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(0);
  });

  it("[get] /user/query", async () => {
    // const keyword = 'tester1';
    const res = await HttpClient.coreApi.usersQuery(null);
    expect(res.status).toBe(200);
    expect(res.data.list.length).toBeGreaterThan(0);
  });

  it("[get] /user/{id}", async () => {
    const res = await HttpClient.coreApi.usersFindOne(
      "5b31eba49a674f606f3c5841"
    );
    expect(res.status).toBe(200);
    expect(res.data.id).toBe("5b31eba49a674f606f3c5841");
  });
});
